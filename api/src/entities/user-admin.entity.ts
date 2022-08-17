import { UserKind } from 'src/data/UserKind';
import { ChildEntity, Column } from 'typeorm';
import { UserEntity } from './user.entity';

@ChildEntity(UserKind.Admin)
export class UserAdminEntity extends UserEntity {
  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  password!: string;
}
