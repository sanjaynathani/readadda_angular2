import {Story} from '../entity/story';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLMapper} from '../ServiceURLConfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ReadBoardService {
  constructor(private http: HttpClient) {
  }

  private _storyListUrl = URLMapper.getURL().storyListURL();

  getStories() {
    console.log(this._storyListUrl);
    const httpHeader = new Headers();

    return this.http.get<any>(this._storyListUrl)
      .do(data => console.log(data))
      //.delay(5000)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

  private getAppPath() {
    console.log('HOST :' + location.origin);
    const pathArray = location.href.split('/');
    let appPath = '/';
    for (let i = 1; i < pathArray.length - 1; i++) {
      appPath += pathArray[i] + '/';
    }
    return appPath;
  }

  getStory(storyID: number) {
    const storyUrl = URLMapper.getURL().storyURL(storyID);
    return this.http.get<any>(storyUrl)
      .do(data => console.log(data))
      .catch(this.handleStoryDetailError);
  }

  private handleStoryDetailError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}
