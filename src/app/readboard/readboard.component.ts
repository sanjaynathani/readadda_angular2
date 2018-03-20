import { Component, OnInit } from '@angular/core';
import { Story } from '../entity/story';
import { ReadBoardService } from './readboard.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'readboard',
  templateUrl: 'readboard.component.html',
  providers: [ReadBoardService]
})
export class ReadBoardComponent implements OnInit {
  stories: Story[] = new Array();
  selectedStory: Story;
  errorMessage: string;
  showAdvanceSearch = false;
  constructor(private _readboardService: ReadBoardService, private router: Router) { }
  ngOnInit() {
      console.info('Loading ReadBoard');
      this.getStories();
  }
  toggleAdvanceSearch() {
      this.showAdvanceSearch = ! this.showAdvanceSearch;
  }
  getStories() {
      console.info('Loading getStories');
    console.info('stories' + this.stories);
      this._readboardService.getStories().subscribe(
          stories => this.stories = this.stories.concat(stories),
          error =>  this.errorMessage = <any>error);
  }
  onScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.getElementById('readList').offsetHeight;
    const body = document.body, html = document.getElementById('readList');
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        this.getStories();
    }
  }
  openStory(storyId) {
      this.router.navigate(['StoryBoard', {'storyId': storyId}]);
  }
}
