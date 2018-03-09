import { Component, OnInit } from '@angular/core';
import { Story } from '../entity/story';
import { ParamMap } from '@angular/router';
import { StoryBoardService } from './storyboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'storyboard',
  templateUrl: 'storyboard.component.html',
  providers: [StoryBoardService]
})
export class StoryBoardComponent implements OnInit {
  storyId: string;
  story: Story;
  errorMessage: string;

  constructor(params: ParamMap, private _storyBoardService: StoryBoardService, private router: Router) {
    this.storyId = params.get('storyId');
  }

  ngOnInit() {
    console.info('Loading StoryBoard');
    this.getStory();
  }

  getStory() {
    console.info('Loading getStory ');
    this._storyBoardService.getStory(this.storyId).subscribe(
      story => this.story = story,
      error => this.errorMessage = <any>error);
    console.info('Story = '+this.story);
  }
  
}