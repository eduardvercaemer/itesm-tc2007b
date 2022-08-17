import { QuestionKind } from 'src/data/QuestionKind';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';
import { FieldEntity } from './field.entity';
import { SubmissionEntity } from './submission.entity';

@Entity({
  name: 'answer',
})
@TableInheritance({
  column: {
    type: 'enum',
    name: 'kind',
    enum: QuestionKind,
  },
})
export abstract class AnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  kind!: QuestionKind;

  @ManyToOne(() => FieldEntity, (field) => field._answers, { nullable: false })
  @JoinColumn({ name: 'field_id' })
  _field!: FieldEntity;

  @Column()
  field_id!: string;

  @ManyToOne(() => SubmissionEntity, (submission) => submission.answers, {
    nullable: false,
  })
  @JoinColumn({ name: 'submission_id' })
  submission!: SubmissionEntity;

  @Column()
  submission_id!: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  metadata?: unknown;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
