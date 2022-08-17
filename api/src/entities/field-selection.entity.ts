import { QuestionKind } from 'src/data/QuestionKind';
import { ChildEntity, Column } from 'typeorm';
import { AnswerSelectionEntity } from './answer-selection.entity';
import { FieldEntity } from './field.entity';

@ChildEntity(QuestionKind.SelectionQuestion)
export class FieldSelectionEntity extends FieldEntity {
  @Column({ type: 'jsonb', nullable: true })
  options!: Array<string>;

  get answers() {
    return this._answers as Array<AnswerSelectionEntity>;
  }
}
