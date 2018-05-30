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
import {MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EmailValidatorDirective
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
    MatListModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AuthGuard, Authentication, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
