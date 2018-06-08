import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Story} from '../entity/story';

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

  constructor(private  formBuilder: FormBuilder) {}

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
    console.log('Content = ', this.story.content);
  }

  get content() {
    return this.writeStoryForm.get('content');
  }

  get title() {
    return this.writeStoryForm.get('title');
  }

  get searchTags() {
    return this.writeStoryForm.get('searchTags');
  }
}
