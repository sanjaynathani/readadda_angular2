import { Story } from '../entity/story';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URLMapper} from '../ServiceURLConfig';

@Injectable()
export class StoryBoardService {
    constructor(private http: Http) { }

    getStory(storyID: String) {
        const storyUrl = URLMapper.getURL().storyURL(storyID);
        return this.http.get(storyUrl)
        .map(res => <Story>res.json().story)
        .do(data => console.log(data))
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
