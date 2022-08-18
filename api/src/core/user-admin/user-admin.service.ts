import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdminCredentials } from 'src/data/AdminCredentials';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { DataSource, EntityManager } from 'typeorm';
import { transactional } from '../transactional';

@Injectable()
export class UserAdminService implements OnModuleInit {
  #logger = new Logger('UserAdminService');

  constructor(
    private readonly ds: DataSource,
    private readonly config: ConfigService,
  ) {}

  async onModuleInit() {
    const root = await this.initRootAdmin();
    this.#logger.log(`Root admin: ${root.email}`);
  }

  private get rootAdmin() {
    return {
      email: this.config.getOrThrow('ROOT_EMAIL'),
      password: this.config.getOrThrow('ROOT_PASSWORD'),
    };
  }

  private async initRootAdmin(): Promise<UserAdminEntity> {
    const user = await this.ds.manager.findOneBy(UserAdminEntity, {
      name: 'root',
    });
    if (user) {
      return user;
    }

    return await this.createAdminUser(this.rootAdmin, 'root');
  }

  private async createAdminUser(
    credentials: AdminCredentials,
    name?: string,
    options: { manager?: EntityManager } = {},
  ): Promise<UserAdminEntity> {
    return await transactional(this.ds, options.manager, async (manager) => {
      return await manager.save(
        UserAdminEntity,
        manager.create(UserAdminEntity, {
          email: credentials.email,
          password: credentials.password,
          name,
        }),
      );
    });
  }
}
