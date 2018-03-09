import { NgModule } from '@angular/core';
import { StoryBoardComponent } from './storyboard.component';
import { StoryBoardService } from './storyboard.service';
import { StoryBoardRoutingModule } from './storyboard.routing.module';

@NgModule({
  imports: [StoryBoardRoutingModule],
  declarations: [
    StoryBoardComponent
  ],
  providers: [StoryBoardService]
})
export class StoryBoardModule { }
