import { QuestionKind } from 'src/data/QuestionKind';
import { ChildEntity } from 'typeorm';
import { AnswerYesNoEntity } from './answer-yes-no.entity';
import { FieldEntity } from './field.entity';

@ChildEntity(QuestionKind.YesNoQuestion)
export class FieldYesNoEntity extends FieldEntity {
  get answers() {
    return this._answers as Array<AnswerYesNoEntity>;
  }
}
