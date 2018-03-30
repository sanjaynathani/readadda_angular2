import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { isLoggedIn } from '../security/authentication.service';
import { CKEDITOR } from 'ckeditor';

@Component({
  selector: 'writeboard',
  templateUrl: 'writeboard.component.html'
})


export class WriteBoardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
      console.info('Loading WriteBoard');
      CKEDITOR.replace( 'editor');
  }

}
