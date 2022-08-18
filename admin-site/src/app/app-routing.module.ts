import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFormsComponent } from './core/app-forms/app-forms.component';
import { SubmissionsComponent } from './core/submissions/submissions.component';
import { VolunteersComponent } from './core/volunteers/volunteers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'submissions',
    pathMatch: 'full'
  },
  {
    path: 'submissions',
    component: SubmissionsComponent,
  },
  {
    path: 'volunteers',
    component: VolunteersComponent,
  },
  {
    path: 'forms',
    component: AppFormsComponent,
  },
  {
    path: '*',
    redirectTo: 'submissions',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
