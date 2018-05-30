import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../security/authentication.service';
import {Authentication} from '../security/authentication';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {emailValidator} from '../validator/emailValidator';
import {regexPattern} from '../validator/regexPattern';

@Component({
  selector: 'authentication',
  templateUrl: 'authentication.component.html'
})

export class AuthenticationComponent implements OnInit {

  error = false;
  token: any;
  isLoggedIn = false;
  register = false;
  login = true;
  loginForm: FormGroup;

  constructor(public authentication: Authentication,
              private _authenticationService: AuthenticationService, private router: Router, private  formBuilder: FormBuilder) {
    console.info('Auth Comp Constructor');
    this.authentication = authentication;
  }

  ngOnInit() {
    console.info('Loading Authentication');
    this.createForm();
    this.register = false;
    this.login = true;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group(
      {
        'username': [this.authentication.username, Validators.compose([Validators.email])],
        'password': [this.authentication.password, Validators.compose([Validators.minLength(4)])]
      });
    /*this.loginForm = new FormGroup({
      'username': new FormControl(this.authentication.username, [Validators.required, Validators.email]),
      'password': new FormControl(this.authentication.password, Validators.required)
    });*/
  }

  onLogin() {
    console.info('Login Component ');
    console.info('Login username = ' + this.loginForm.value.username);
    console.info('Login password = ' + this.loginForm.value.password);

    this._authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        token => {
          if (token === '') {
            this.error = true;
          } else {
            this.error = false;
            console.info('No error === ' + token);
            console.info('Is LogedIn === ' + this.authentication.isLoggedIn);
            this.router.navigate(['readBoard']);
          }
        });
  }

  showRegister() {
    this.login = false;
    this.register = true;
  }

  showLogin() {
    this.login = true;
    this.register = false;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getEmailError() {
    return this.username.hasError('required') ? 'Value required' :
      this.username.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'Value required' :
      this.password.hasError('minlength') ? 'Minimum lenght is 4' :
        '';
  }
}
