import { QuestionKind } from 'src/data/QuestionKind';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';
import { AnswerEntity } from './answer.entity';
import { FormEntity } from './form.entity';

@Entity({
  name: 'field',
})
@TableInheritance({
  column: {
    type: 'enum',
    name: 'kind',
    enum: QuestionKind,
  },
})
export abstract class FieldEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  kind!: QuestionKind;

  @Column({ nullable: true })
  label?: string;

  @Column({ nullable: true })
  main_content?: string;

  @ManyToMany(() => FormEntity, (form) => form.fields, { nullable: false })
  forms!: Array<FormEntity>;

  @OneToMany(() => AnswerEntity, (answer) => answer._field, { nullable: false })
  _answers!: Array<AnswerEntity>;

  @Column({ nullable: false })
  active!: boolean;

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
