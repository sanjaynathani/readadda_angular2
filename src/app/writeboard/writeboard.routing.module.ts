import { Routes, RouterModule } from '@angular/router';
import { WriteBoardComponent } from './writeboard.component';
import { NgModule } from '@angular/core';
import {CanDeactivateGuard} from '../security/canDeactivateGuard';

const WriteBoardRoutes: Routes = [

  {
    path: '',
    component: WriteBoardComponent,
    canDeactivate: [CanDeactivateGuard]
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
