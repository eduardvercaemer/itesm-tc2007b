import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AnswerEntity } from './answer.entity';
import { FormEntity } from './form.entity';

@Entity({
  name: 'submission',
})
export class SubmissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => FormEntity, (form) => form.submissions, { nullable: false })
  @JoinColumn({
    name: 'form_id',
  })
  form!: FormEntity;

  @Column()
  form_id!: string;

  @OneToMany(() => AnswerEntity, (answer) => answer.submission, {
    nullable: false,
  })
  answers!: Array<AnswerEntity>;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  metadata?: unknown;
}
