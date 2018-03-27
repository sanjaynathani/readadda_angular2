import { Component, OnInit } from '@angular/core';
import { Story } from '../entity/story';
import { ActivatedRouteSnapshot } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRouteSnapshot, private _readBoardService: ReadBoardService, private router: Router) {
    this.storyId = activatedRoute.paramMap.get('storyId');
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
    console.info('Story = ' + this.story);
  }
}
