import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './authentication';
import { AuthGuard } from './authGuard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication.routing.module';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CdkTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: []
})
export class AuthenticationModule { }
