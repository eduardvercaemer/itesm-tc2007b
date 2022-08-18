import {
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/data/Auth';
import { UserAdminEntity } from 'src/entities/user-admin.entity';
import { AuthAdminService } from './auth-admin.service';
import { CurrentUserAdmin } from './decorators/current-user-admin.decorator';
import { LocalAdminGuard } from './guards/local-admin.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authAdminService: AuthAdminService) {}

  @Post('admin')
  @UseGuards(LocalAdminGuard)
  @UsePipes(ValidationPipe)
  async adminLogin(@CurrentUserAdmin() user: UserAdminEntity): Promise<Auth> {
    return await this.authAdminService.login(user);
  }
}
