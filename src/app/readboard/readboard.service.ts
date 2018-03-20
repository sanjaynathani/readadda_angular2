import {Story} from '../entity/story';
import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {URLMapper} from '../ServiceURLConfig';

@Injectable()
export class ReadBoardService {
    constructor(private http: Http) { }

    private _storyListUrl = URLMapper.getURL().storyListURL();
    private args: RequestOptionsArgs;

    getStories() {
        console.log(this. _storyListUrl);
        const httpHeader = new Headers();
        const options = new RequestOptions({
          headers: httpHeader
        });

        //options.headers.append('Access-Control-Allow-Origin', '*');
        //options.headers.append('Access-Control-Allow-Credentials', 'true');
        //options.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        //options.headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, ' +
        //  'Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        return this.http.get(this. _storyListUrl)
            .map(res => <Story[]>res.json().stories)
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
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
}
