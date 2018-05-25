import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Authentication} from './authentication';
import {HttpClient} from '@angular/common/http';
import {URLMapper} from '../ServiceURLConfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

let loggedIn: boolean;

@Injectable()
export class AuthenticationService {
  token: string;
  private loginDataUrl = URLMapper.getURL().loginURL();

  constructor(private authentication: Authentication, private http: HttpClient) {
    console.log('Authentication Service constructor');
    this.token = localStorage.getItem('token');
    this.isLoggedIn();
    loggedIn = this.authentication.isLoggedIn;
  }

  login(username: string, password: string)  {
    console.log(this.loginDataUrl);
    this.authentication.username = username;
    this.authentication.password = password;
    return this.http.post(this.loginDataUrl, this.authentication)
      .map(res => this.handleLogin(res, username, password))
      .do(token => console.log(token))
      .catch(this.handleError);
  }

  logout() {

    this.token = undefined;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authentication.isLoggedIn = false;
    this.authentication.username = '';
    this.authentication.password = '';
    loggedIn = false;
    return Observable.of(true);
  }

  isLoggedIn() {
    console.log(localStorage.getItem('token'));
    this.authentication.username = localStorage.getItem('username');
    this.authentication.isLoggedIn = !!localStorage.getItem('token');
    loggedIn = !!localStorage.getItem('token');
  }

  private handleLogin(data: any, username: string, password: string): String {
    const auth = data
    console.log('Passed parameter :' + username + ' ' + password);
    console.log('Auth parameter :' + auth.username + ' ' + auth.password);
    if (auth.username === username && auth.password === password) {
      this.token = 'token';
      this.authentication.username = username;
      this.authentication.isLoggedIn = true;
      localStorage.setItem('token', this.token);
      localStorage.setItem('username', username);
      this.authentication.password = '';
      console.log('Is LoggedIn success :' + this.authentication.isLoggedIn);
      loggedIn = true;
      return this.token;
    } else {
      this.authentication.isLoggedIn = false;
      console.log('Is LoggedIn failed :' + this.authentication.isLoggedIn);
      loggedIn = false;
      return '';
    }
  }

  private handleError(result: Response) {
    return Observable.throw('authentication failure' + result);
  }
}

export function isLoggedIn() {
  console.log('----' + loggedIn + '----');
  return loggedIn;
}
