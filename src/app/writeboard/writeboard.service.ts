import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLMapper} from '../ServiceURLConfig';
import {Story} from '../entity/story';
import {Authentication} from '../security/authentication';

@Injectable({
  providedIn: 'root'
})
export class WriteboardService {

  private _submitStoryURL = URLMapper.getURL().submitStoryURL();

  constructor(private httpClient: HttpClient, private authentication:Authentication) { }

  submitStory(story: Story) {
    story.authorName = this.authentication.username;
    story.createdBy = 'TaleADDA_Web';

  }

}
