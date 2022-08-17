import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { EntitiesModule } from 'src/entities/entities.module';
import { AuthService } from './auth.service';
import { LocalAdminStrategy } from './strategies/local-admin.strategy';
import { AuthController } from './auth.controller';
import { LocalAdminGuard } from './guards/local-admin.guard';

@Module({
  imports: [EntitiesModule, PassportModule],
  providers: [AuthService, LocalAdminStrategy, LocalAdminGuard],
  controllers: [AuthController],
})
export class AuthModule {}
