import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Story} from '../entity/story';
import {AuthenticationService} from '../security/authentication.service';
import {WriteboardService} from './writeboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'writeboard',
  templateUrl: 'writeboard.component.html'
})


export class WriteBoardComponent implements OnInit {
  story: Story;
  writeStoryForm: FormGroup;

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'Start writing...',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        ['link']
      ],
    }
  };
  private storyShortDescription = '';

  constructor(private  formBuilder: FormBuilder, private _writeboardService: WriteboardService, private snackBar: MatSnackBar, private router: Router,  private route: ActivatedRoute) {}

  ngOnInit() {
      console.info('Loading WriteBoard');
      this.createForm();
  }

  private createForm() {
     this.writeStoryForm = this.formBuilder.group(
      {
        content: [''],
        title: [''],
        searchTags: ['']
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

  onPublish() {
    this.story = new Story(this.writeStoryForm.value);
    this.story.storyShortDescription = this.storyShortDescription;
    console.log('Content = ', this.story.content);
    this._writeboardService.submitStory(this.story).subscribe(
      story => {
        if (story == null)  {
          console.log('Error submiting story!');
        } else {
          console.log('Story submitted Succesfully! Story Id=', story.id);
          this.snackBar.open('Story submitted Succesfully!', 'Ok', {
            duration: 2000,
          });
          this.router.navigate(['story', {id: story.id}], {relativeTo: this.route});
        }
      });
  }

  tabSelectionChanged(event) {
    console.log('Tab selection change event = ', event.tab.textLabel);
  }

  onReset() {
    this.writeStoryForm.reset();
  }
  canDeactivate(): boolean {
    return this.writeStoryForm.pristine;
  }
}
