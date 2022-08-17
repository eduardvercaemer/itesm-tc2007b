import { QuestionKind } from 'src/data/QuestionKind';
import { ChildEntity } from 'typeorm';
import { AnswerTextEntity } from './answer-text.entity';
import { FieldEntity } from './field.entity';

@ChildEntity(QuestionKind.TextQuestion)
export class FieldTextEntity extends FieldEntity {
  get answers() {
    return this._answers as Array<AnswerTextEntity>;
  }
}
