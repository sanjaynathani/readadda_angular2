import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AuthenticationModule } from './security/authentication.module';
import { Authentication } from './security/authentication';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from './security/authGuard';
import { LayoutComponent } from './layout/layout.component';
import { EmailValidatorDirective } from './validator/emailValidator';
import { QuillEditorModule } from 'ngx-quill-editor';
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressBarModule,
  MatExpansionModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule, MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ReadBoardModule} from './readboard/readboard.module';
import {ReadBoardComponent} from './readboard/readboard.component';
import {CommonUtils} from './util/common.utils';
import {DatePipe} from '@angular/common';
import {CanDeactivateGuard} from './security/canDeactivateGuard';
import {InfoDialogComponent} from './component/info.dialog';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EmailValidatorDirective,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    QuillEditorModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [InfoDialogComponent],
  exports: [],
  providers: [AuthGuard, Authentication, AuthenticationService, DatePipe, CommonUtils, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
