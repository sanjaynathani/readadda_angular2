import { NgModule } from '@angular/core';
import { ReadBoardComponent } from './readboard.component';
import { ReadBoardService } from './readboard.service';
import { CommonModule } from '@angular/common';
import { ReadBoardRoutingModule } from './readboard.routing.module';
import { StoryBoardComponent } from './storyboard.component';
import {
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  declarations: [
    ReadBoardComponent,
    StoryBoardComponent
  ],
  imports: [
    CommonModule,
    ReadBoardRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [ReadBoardService],
  exports: [ReadBoardComponent]
})
export class ReadBoardModule { }
