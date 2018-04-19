import { Routes, RouterModule } from '@angular/router';
import { WriteBoardComponent } from './writeboard.component';
import { NgModule } from '@angular/core';

const WriteBoardRoutes: Routes = [

  {
    path: '',
    component: WriteBoardComponent
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(WriteBoardRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class WriteBoardRoutingModule { }
