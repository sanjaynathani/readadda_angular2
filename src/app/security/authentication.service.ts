import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Authentication} from './authentication';
import {Http, Response} from '@angular/http';

let loggedIn: boolean;

@Injectable()
export class AuthenticationService {
  token: string;
  private loginDataUrl = location.origin + '/libs/data/loginData.json';

  constructor(private authentication: Authentication, private http: Http) {
    console.log("Authentication Service constructor");
    this.token = localStorage.getItem('token');
    this.isLoggedIn();
    loggedIn=this.authentication.isLoggedIn
  }

  login(username: string, password: string)  {
    /*
     * If we had a login api, we would have done something like this

    return this.http.post('/auth/login', JSON.stringify({
        username: username,
        password: password
      }), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((res : any) => {
        let data = res.json();
        this.token = data.token;
        localStorage.setItem('token', this.token);
      });

      for the purpose of this cookbook, we will juste simulate that
    */

    /*if (username === 'test' && password === 'test') {
      this.token = 'token';
      
      localStorage.setItem('token', this.token);
      localStorage.setItem('username', username);
      this.authentication.password="";
      return Observable.of('token');
    }

    return Observable.throw('authentication failure');*/
    
    return this.http.get(this.loginDataUrl)
            .map(res => this.handleLogin(res, username, password))
            .do(data => console.log(data))
            .catch(this.handleError);
  }

  logout() {
    /*
     * If we had a login api, we would have done something like this

    return this.http.get(this.config.serverUrl + '/auth/logout', {
      headers: new Headers({
        'x-security-token': this.token
      })
    })
    .map((res : any) => {
      this.token = undefined;
      localStorage.removeItem('token');
    });
     */

    this.token = undefined;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authentication.isLoggedIn=false;
    this.authentication.username="";
    this.authentication.password="";
    loggedIn=false;
    return Observable.of(true);
  }
  
  isLoggedIn() {
    console.log(localStorage.getItem('token'));
    this.authentication.username=localStorage.getItem('username');
    this.authentication.isLoggedIn=!!localStorage.getItem('token');
    loggedIn=!!localStorage.getItem('token');
    //return !!localStorage.getItem('token');
  }

  private handleLogin(res: Response, username: string, password: string){
    let auth = <Authentication>res.json().loginData;
    console.log("Passed parameter :"+username+" "+password);
    console.log("Auth parameter :"+auth.username+" "+auth.password);
    if (auth.username === username && auth.password === password) {
      this.token = 'token';
      this.authentication.username=username;
      this.authentication.isLoggedIn=true;
      localStorage.setItem('token', this.token);
      localStorage.setItem('username', username);
      this.authentication.password="";
      console.log("Is LoggedIn success :"+this.authentication.isLoggedIn);
      loggedIn=true;
      return this.token;
    }else{
      this.authentication.isLoggedIn=false;
      console.log("Is LoggedIn failed :"+this.authentication.isLoggedIn);
      loggedIn=false;
      return "";
    }
  }
  
  private handleError(res: Response){
    return Observable.throw('authentication failure');
  }
}

export function isLoggedIn(){
    console.log("----"+loggedIn+"----");
    return loggedIn;
}