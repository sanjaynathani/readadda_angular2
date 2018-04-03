import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { isLoggedIn } from '../security/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {emailValidator} from '../validator/emailValidator';
import {regexPattern} from '../validator/regexPattern';

@Component({
  selector: 'writeboard',
  templateUrl: 'writeboard.component.html'
})


export class WriteBoardComponent implements OnInit {
  ckeditorContent = '<p>Some html</p>';
  writeStoryForm: FormGroup;

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  constructor() {}

  ngOnInit() {
      console.info('Loading WriteBoard');
      this.createForm();
  }

  private createForm() {
    this.writeStoryForm = new FormGroup({
      'ckeditorContent': new FormControl(this.ckeditorContent),
    });
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }
}
