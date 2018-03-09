import { Routes, RouterModule } from '@angular/router';
import { ReadBoardComponent } from './readboard.component';
import { NgModule }  from '@angular/core';

const ReadBoardRoutes: Routes = [

    {
        path: '',
        component: ReadBoardComponent
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
