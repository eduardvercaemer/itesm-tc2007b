import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminCredentials } from 'src/data/AdminCredentials';
import { Auth } from 'src/data/Auth';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { DataSource, EntityManager } from 'typeorm';
import { transactional } from '../transactional';

@Injectable()
export class AuthAdminService {
  constructor(
    private readonly ds: DataSource,
    private readonly jwtService: JwtService,
  ) {}

  async validate(
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

  async login(user: UserAdminEntity): Promise<Auth> {
    const payload = { id: user.id };
    const accessToken = await this.jwtService.sign(payload);
    return {
      accessToken,
      id: user.id,
      kind: user.kind,
      email: user.email,
      name: user.name,
    };
  }
}
