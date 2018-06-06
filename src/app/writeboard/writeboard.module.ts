import {NgModule} from '@angular/core';
import {WriteBoardComponent} from './writeboard.component';
import {CommonModule} from '@angular/common';
import {WriteBoardRoutingModule} from './writeboard.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuillEditorModule } from 'ngx-quill-editor';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    WriteBoardComponent
  ],
  imports: [
    CommonModule,
    WriteBoardRoutingModule,
    QuillEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: []
})
export class WriteBoardModule {
}
