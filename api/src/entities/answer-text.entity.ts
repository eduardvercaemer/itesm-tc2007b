import { QuestionKind } from 'src/data/QuestionKind';
import { ChildEntity, Column } from 'typeorm';
import { AnswerEntity } from './answer.entity';
import { FieldTextEntity } from './field-text.entity';

@ChildEntity(QuestionKind.TextQuestion)
export class AnswerTextEntity extends AnswerEntity {
  @Column({ nullable: true })
  text_answer!: string;

  get field() {
    return this._field as FieldTextEntity;
  }
}
