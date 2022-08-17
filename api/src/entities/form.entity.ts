import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FieldEntity } from './field.entity';
import { SubmissionEntity } from './submission.entity';

@Entity({
  name: 'form',
})
export class FormEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    comment: 'The name of the form.',
    nullable: false,
  })
  title!: string;

  @ManyToMany(() => FieldEntity, (field) => field.forms, { nullable: false })
  @JoinTable({
    name: 'form_field',
  })
  fields!: Array<FieldEntity>;

  @OneToMany(() => SubmissionEntity, (submission) => submission.form, {
    nullable: false,
  })
  submissions!: Array<SubmissionEntity>;

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
