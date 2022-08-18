import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AppFormsModule } from './app-forms/app-forms.module';
import { VolunteersModule } from './volunteers/volunteers.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, AppFormsModule, VolunteersModule],
})
export class CoreModule {}
