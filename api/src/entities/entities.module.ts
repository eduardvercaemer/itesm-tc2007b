import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerSelectionEntity } from './answer-selection.entity';
import { AnswerTextEntity } from './answer-text.entity';
import { AnswerYesNoEntity } from './answer-yes-no.entity';
import { AnswerEntity } from './answer.entity';
import { FieldSelectionEntity } from './field-selection.entity';
import { FieldTextEntity } from './field-text.entity';
import { FieldYesNoEntity } from './field-yes-no.entity';
import { FieldEntity } from './field.entity';
import { FormEntity } from './form.entity';
import { SubmissionEntity } from './submission.entity';
import { UserAdminEntity } from './user-admin.entity';
import { UserEntity } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserAdminEntity,
      FieldEntity,
      FieldTextEntity,
      FieldYesNoEntity,
      FieldSelectionEntity,
      AnswerEntity,
      AnswerTextEntity,
      AnswerYesNoEntity,
      AnswerSelectionEntity,
      SubmissionEntity,
      FormEntity,
    ]),
  ],
})
export class EntitiesModule {}
