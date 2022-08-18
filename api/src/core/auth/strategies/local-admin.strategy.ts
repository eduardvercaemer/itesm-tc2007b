import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { AuthAdminService } from '../auth-admin.service';

@Injectable()
export class LocalAdminStrategy extends PassportStrategy(
  Strategy,
  'local-admin',
) {
  constructor(private readonly authService: AuthAdminService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<UserAdminEntity> {
    return await this.authService.validate({ email, password });
  }
}
