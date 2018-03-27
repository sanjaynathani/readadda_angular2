import { Routes, RouterModule } from '@angular/router';
import { ReadBoardComponent } from './readboard.component';
import { StoryBoardComponent } from './storyboard.component';
import { NgModule } from '@angular/core';

const ReadBoardRoutes: Routes = [

  {
    path: '',
    component: ReadBoardComponent
  },
  {
    path: ':storyId',
    component: StoryBoardComponent
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(ReadBoardRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class ReadBoardRoutingModule { }
