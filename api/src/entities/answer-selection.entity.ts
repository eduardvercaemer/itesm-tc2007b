import { QuestionKind } from 'src/data/QuestionKind';
import { ChildEntity, Column } from 'typeorm';
import { AnswerEntity } from './answer.entity';
import { FieldSelectionEntity } from './field-selection.entity';

@ChildEntity(QuestionKind.SelectionQuestion)
export class AnswerSelectionEntity extends AnswerEntity {
  @Column({ nullable: true })
  selection_answer!: number;

  get field() {
    return this._field as FieldSelectionEntity;
  }
}
