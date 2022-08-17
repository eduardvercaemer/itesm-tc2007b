import { UserKind } from 'src/data/UserKind';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity({
  name: 'user',
})
@TableInheritance({
  column: {
    name: 'kind',
    type: 'enum',
    enum: UserKind,
  },
})
export abstract class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  kind!: UserKind;

  @Column({ nullable: true })
  name?: string;
}
