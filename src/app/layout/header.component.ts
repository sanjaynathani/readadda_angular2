import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass} from '@angular/common';
import { AuthenticationService } from '../security/authentication.service';
import { Authentication } from '../security/authentication';

/**
 * Header component
 */
@Component({
  selector: 'ra-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  isActive = false;
  location: Location;
  error = false;
  token: any;
  isCollapsed = false;
  /**
   * Header component constructor
   */
  constructor(public authentication: Authentication, private _authenticationService: AuthenticationService,

  private router: Router) {}

  /**
   * Header component: init method
   */
  ngOnInit() {
      console.info('Loading Header');
      console.info('logged in = ' + this.authentication.isLoggedIn);
      this.loggedIn();
  }

  isSelected(path): boolean {
      return location.href.indexOf(path) !== -1;
  }


  logout() {
    this._authenticationService.logout().subscribe((stat: boolean) => {this.router.navigate(['/readBoard']); });
  }

  loggedIn() {
    this._authenticationService.isLoggedIn();
  }

  onchange() {
    console.log('change');
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}

