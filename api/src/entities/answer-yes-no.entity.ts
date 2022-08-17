import { QuestionKind } from 'src/data/QuestionKind';
import { ChildEntity, Column } from 'typeorm';
import { AnswerEntity } from './answer.entity';
import { FieldYesNoEntity } from './field-yes-no.entity';

@ChildEntity(QuestionKind.YesNoQuestion)
export class AnswerYesNoEntity extends AnswerEntity {
  @Column({ nullable: true })
  yes_no_answer!: boolean;

  get field() {
    return this._field as FieldYesNoEntity;
  }
}
