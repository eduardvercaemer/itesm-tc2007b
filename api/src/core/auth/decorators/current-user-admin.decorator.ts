import { ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { UserAdminEntity } from 'src/entities/user-admin.entity';

export const CurrentUserAdmin = createParamDecorator(
  (data: string, ctx: ExecutionContext): UserAdminEntity => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !(user instanceof UserAdminEntity)) {
      throw new InternalServerErrorException('Expected valid admin user');
    }

    return user;
  },
);
