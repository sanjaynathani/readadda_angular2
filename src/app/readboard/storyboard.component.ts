import { Component, OnDestroy, OnInit } from '@angular/core';
import { Story } from '../entity/story';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReadBoardService } from './readboard.service';
import { ISubscription } from 'rxjs-compat/Subscription';
import {CommonUtils} from '../util/common.utils';


@Component({
  templateUrl: 'storyboard.component.html',
  providers: [ReadBoardService]
})
export class StoryBoardComponent implements OnInit, OnDestroy {
  id: string;
  story: Story;
  errorMessage: string;
  private subscription: ISubscription;

  constructor(private activatedRoute: ActivatedRoute, private _readBoardService: ReadBoardService, private router: Router, private commonUtils: CommonUtils) {
    console.log('Query Params === ' + JSON.stringify(activatedRoute.snapshot.params));
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    console.info('Loading StoryBoard');
    this.getStory();
  }

  getStory() {
    console.info('Loading getStory ' + this.id);
    this.subscription = this._readBoardService.getStory(this.id).subscribe(
      story => this.story = story,
      error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getLocalDate() {
    return this.commonUtils.getLocaleDate((this.story.modifiedDate == null || this.story.modifiedDate === '') ? this.story.createdDate : this.story.modifiedDate);
  }
}
