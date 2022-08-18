import { Module } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { UserAdminController } from './user-admin.controller';
import { EntitiesModule } from 'src/entities/entities.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, EntitiesModule],
  providers: [UserAdminService],
  controllers: [UserAdminController],
})
export class UserAdminModule {}
