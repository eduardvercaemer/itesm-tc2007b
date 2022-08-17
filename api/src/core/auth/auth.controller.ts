import {
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { CurrentUserAdmin } from './decorators/current-user-admin.decorator';
import { LocalAdminGuard } from './guards/local-admin.guard';

@Controller('auth')
export class AuthController {
  @Post('admin-login')
  @UseGuards(LocalAdminGuard)
  @UsePipes(ValidationPipe)
  async adminLogin(
    @CurrentUserAdmin() user: UserAdminEntity,
  ): Promise<UserAdminEntity> {
    return user;
  }
}
