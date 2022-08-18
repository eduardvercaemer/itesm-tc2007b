import { ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { UserKind } from 'src/data/UserKind';
import { UserAdminEntity } from 'src/entities/user-admin.entity';

/**
 * Returns the current request user, without loading the entity, preload
 * if needed.
 */
export const CurrentUserAdmin = createParamDecorator(
  (data: string, ctx: ExecutionContext): UserAdminEntity => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.id || user.kind !== UserKind.Admin) {
      throw new InternalServerErrorException('Expected valid admin user');
    }

    return user;
  },
);
