import { Component, OnInit } from '@angular/core';
import { Story } from '../entity/story';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {ReadBoardService} from './readboard.service';


@Component({
  templateUrl: 'storyboard.component.html',
  providers: [ReadBoardService]
})
export class StoryBoardComponent implements OnInit {
  storyId: string;
  story: Story;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private _readBoardService: ReadBoardService, private router: Router) {
    console.log('Query Params === ' + JSON.stringify(activatedRoute.snapshot.params));
    this.storyId = activatedRoute.snapshot.params['storyId'];
  }

  ngOnInit() {
    console.info('Loading StoryBoard');
    this.getStory();
  }

  getStory() {
    console.info('Loading getStory ' + this.storyId);
    this._readBoardService.getStory(this.storyId).subscribe(
      story => this.story = story,
      error => this.errorMessage = <any>error);
  }
}
