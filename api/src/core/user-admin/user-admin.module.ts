import { Module } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { EntitiesModule } from 'src/entities/entities.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, EntitiesModule],
  providers: [UserAdminService],
})
export class UserAdminModule {}
