import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { NgModule }  from '@angular/core';

const AuthenticationRoutes: Routes = [

    {
        path: '',
        component: AuthenticationComponent,
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(AuthenticationRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AuthenticationRoutingModule { }
