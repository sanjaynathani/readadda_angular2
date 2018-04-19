import {Routes, RouterModule} from '@angular/router';

import {AuthenticationComponent} from './security/authentication.component';
import {AuthGuard} from './security/authGuard';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

const MainRoutes: Routes = [
  {
    path: '',
    redirectTo: '/readBoard',
    pathMatch: 'full'
  },
  {
    path: 'readBoard',
    loadChildren: 'app/readboard/readboard.module#ReadBoardModule'
  },
  {
    path: 'writeboard',
    loadChildren: 'app/writeboard/writeboard.module#WriteBoardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'authentication',
    loadChildren: 'app/security/authentication.module#AuthenticationModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      MainRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
