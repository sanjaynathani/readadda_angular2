import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLMapper} from '../ServiceURLConfig';
import {Story, PublishStatus, StatusHistory} from '../entity/story';
import {Authentication} from '../security/authentication';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {_throw} from 'rxjs-compat/observable/throw';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';

@Injectable({
  providedIn: 'root'
})
export class WriteboardService {

  private _submitStoryURL = URLMapper.getURL().submitStoryURL();

  constructor(private httpClient: HttpClient, private authentication: Authentication) { }

  submitStory(story: Story) {
    story.authorName = this.authentication.username;
    story.createdBy = 'TaleADDA_Web';
    story.createdDate = new Date().toJSON();
    story.currentStatus = PublishStatus.PENDING;
    const statusHistory = new StatusHistory();
    statusHistory.statusChangedFrom = null;
    statusHistory.statusChangedTo = story.currentStatus;
    statusHistory.changedBy = story.createdBy;
    statusHistory.changedOn = new Date().toJSON();
    const statuses = new Array();
    statuses[0] = statusHistory;
    story.statusHistory = statuses;
    return this.httpClient.post(this._submitStoryURL, story)
      .map(data => new Story(data))
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(result: Response) {
    return _throw('Submit story failed ' + JSON.stringify(result));
  }

}
