import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './security/authentication.service';

@Component({
  selector: 'read-adda',
  template: '<ra-layout>Loading..</ra-layout>',
})

export class AppComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit() {
    console.info('Loading ReadAdda');
    console.info('Is LoggedIn = ' + this._authenticationService.isLoggedIn());
  }

}
