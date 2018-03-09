import { Routes, RouterModule } from '@angular/router';
import { StoryBoardComponent } from './storyboard.component';
import { NgModule }  from '@angular/core';

const StoryBoardRoutes: Routes = [
    
    {
        path: '/storyboard/:storyId',        
        component: StoryBoardComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(StoryBoardRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class StoryBoardRoutingModule { }