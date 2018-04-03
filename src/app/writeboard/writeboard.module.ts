import {NgModule} from '@angular/core';
import {WriteBoardComponent} from './writeboard.component';
import {CommonModule} from '@angular/common';
import {ReadBoardRoutingModule} from './writeboard.routing.module';
import {FormsModule} from '@angular/forms';
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  declarations: [
    WriteBoardComponent
  ],
  imports: [
    CommonModule,
    ReadBoardRoutingModule,
    QuillEditorModule,
    FormsModule
  ],
  providers: []
})
export class WriteBoardModule {
}
