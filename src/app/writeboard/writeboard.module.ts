import {NgModule} from '@angular/core';
import {WriteBoardComponent} from './writeboard.component';
import {CommonModule} from '@angular/common';
import {WriteBoardRoutingModule} from './writeboard.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuillEditorModule } from 'ngx-quill-editor';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatTabsModule} from '@angular/material';
import {ReadBoardModule} from '../readboard/readboard.module';
import {ReadBoardComponent} from '../readboard/readboard.component';
import {InfoDialogComponent} from '../component/info.dialog';

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
    MatCardModule,
    MatTabsModule,
    ReadBoardModule,
    MatButtonModule
  ],
  providers: []
})
export class WriteBoardModule {
}
