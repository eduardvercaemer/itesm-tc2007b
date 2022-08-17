import { UserKind } from 'src/data/UserKind';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity(UserKind.Admin)
export class UserAdminEntity {
  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true, comment: 'Hashed password' })
  password!: string;
}
