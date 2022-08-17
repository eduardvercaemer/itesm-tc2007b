import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminCredentials } from 'src/data/AdminCredentials';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { DataSource, EntityManager } from 'typeorm';
import { transactional } from '../transactional';

@Injectable()
export class AuthService {
  constructor(private readonly ds: DataSource) {}

  async validateAdmin(
    credentials: AdminCredentials,
    options: { manager?: EntityManager } = {},
  ): Promise<UserAdminEntity> {
    return await transactional(this.ds, options.manager, async (manager) => {
      const user = await manager.findOne(UserAdminEntity, {
        where: {
          email: credentials.email,
          password: credentials.password,
        },
      });

      if (!user) throw new UnauthorizedException();

      return user;
    });
  }
}
