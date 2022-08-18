import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { CurrentUserAdmin } from '../auth/decorators/current-user-admin.decorator';
import { JwtAdminGuard } from '../auth/guards/jwt-admin.guard';
import { UserAdminService } from './user-admin.service';

@Controller('user-admin')
export class UserAdminController {
  constructor(private readonly userAdminService: UserAdminService) {}

  @Get()
  @UseGuards(JwtAdminGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  async get(
    @CurrentUserAdmin() user: UserAdminEntity,
  ): Promise<UserAdminEntity> {
    return await this.userAdminService.find(user.id);
  }
}
