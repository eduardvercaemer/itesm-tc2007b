import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormsComponent } from './core/app-forms/app-forms.component';
import { AuthApi } from './core/auth/auth.api';
import { AuthStore } from './core/auth/auth.store';
import { SubmissionsComponent } from './core/submissions/submissions.component';
import { VolunteersComponent } from './core/volunteers/volunteers.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFormsComponent,
    SubmissionsComponent,
    VolunteersComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AuthStore]),
  ],
  providers: [AuthApi],
  bootstrap: [AppComponent],
})
export class AppModule {}
