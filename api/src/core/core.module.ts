import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserAdminModule } from './user-admin/user-admin.module';

@Module({
  imports: [AuthModule, UserAdminModule],
})
export class CoreModule {}
