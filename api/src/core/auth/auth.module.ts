import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EntitiesModule } from 'src/entities/entities.module';
import { AuthAdminService } from './auth-admin.service';
import { LocalAdminStrategy } from './strategies/local-admin.strategy';
import { AuthController } from './auth.controller';
import { LocalAdminGuard } from './guards/local-admin.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAdminStrategy } from './strategies/jwt-admin.strategy';
import { JwtAdminGuard } from './guards/jwt-admin.guard';

@Module({
  imports: [
    ConfigModule,
    EntitiesModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): JwtModuleOptions => ({
        secret: config.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [
    AuthAdminService,
    LocalAdminStrategy,
    LocalAdminGuard,
    JwtAdminStrategy,
    JwtAdminGuard,
  ],
  exports: [JwtAdminGuard, LocalAdminGuard],
  controllers: [AuthController],
})
export class AuthModule {}
