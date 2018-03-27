import { NgModule } from '@angular/core';
import { ReadBoardComponent } from './readboard.component';
import { ReadBoardService } from './readboard.service';
import { CommonModule } from '@angular/common';
import { ReadBoardRoutingModule } from './readboard.routing.module';
import { StoryBoardComponent } from './storyboard.component';

@NgModule({
  declarations: [
    ReadBoardComponent,
    StoryBoardComponent
  ],
  imports: [
    CommonModule,
    ReadBoardRoutingModule
  ],
  providers: [ReadBoardService]
})
export class ReadBoardModule { }
