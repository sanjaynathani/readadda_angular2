import {Component, NgModule, OnInit} from '@angular/core';
import {AuthenticationService} from '../security/authentication.service';
import {Router, RoutesRecognized} from '@angular/router';
import {Authentication} from '../security/authentication';



@Component({
  selector: 'ra-layout',
  templateUrl: 'layout.component.html'
})

export class LayoutComponent implements OnInit {

  isActive = false;
  location: Location;
  error = false;
  token: any;
  isCollapsed = false;

  constructor(public authentication: Authentication, private _authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
      console.info('Loading Layout');
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

  onRouteChange() {
       this.router.events
      .filter(e => e instanceof RoutesRecognized)
      .pairwise()
      .subscribe((event: any[]) => {
        console.log('Original URL = ', event[0].urlAfterRedirects);
        this.authentication.redirectTo = event[0].urlAfterRedirects;
      });
  }

}


