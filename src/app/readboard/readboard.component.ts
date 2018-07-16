import {Component, Input, OnInit} from '@angular/core';
import { Story } from '../entity/story';
import { ReadBoardService } from './readboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ReadlistType} from '../entity/readlist.type';
import {CommonUtils} from '../util/common.utils';

@Component({
  selector: 'readboard',
  templateUrl: 'readboard.component.html',
  providers: [ReadBoardService]
})
export class ReadBoardComponent implements OnInit {

  @Input() type: ReadlistType;


  stories: Story[] = new Array();
  selectedStory: Story;
  errorMessage: string;
  showProgressBar = false;
  constructor(private _readboardService: ReadBoardService, private router: Router, private route: ActivatedRoute, private commonUtils: CommonUtils) {}

  ngOnInit() {
      console.info('Loading ReadBoard: ', this.type);
      this.getStories();
  }

  isProgressing() {
      return this.showProgressBar;
  }

  getStories() {
    console.info('Loading getStories');
    console.info('stories' + this.stories);
    this.showProgressBar = true;
      this._readboardService.getStories(this.type)
        .do(s => this.showProgressBar = false)
        .subscribe(
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
  openStory(id) {
      this.router.navigate(['story', {id: id}], {relativeTo: this.route});

  }

  getDateTime() {
    return new Date().toJSON();
  }

  getLocalDate(selectedStory: Story) {
    return this.commonUtils.getLocaleDate((selectedStory.modifiedDate == null || selectedStory.modifiedDate === '') ? selectedStory.createdDate : selectedStory.modifiedDate);
  }
}
