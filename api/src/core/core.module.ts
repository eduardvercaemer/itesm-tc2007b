import { Module } from '@nestjs/common';
import { FormCreationModule } from './form-creation/form-creation.module';
import { FormDataModule } from './form-data/form-data.module';
import { FormDownloadModule } from './form-download/form-download.module';
import { FormEditModule } from './form-edit/form-edit.module';
import { FormSubmitModule } from './form-submit/form-submit.module';

@Module({
  imports: [
    FormCreationModule,
    FormDataModule,
    FormDownloadModule,
    FormEditModule,
    FormSubmitModule,
  ],
})
export class CoreModule {}
