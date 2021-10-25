import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { HttpResponse } from 'src/shared/models/http-response.model';
import { EmailDTO } from './dtos/email.dto';
import { ResetPasswordDTO } from './dtos/reset-password.dto';
import { UserDTO } from './dtos/user.dto';
import { UsernameDTO } from './dtos/username.dto';
import { UserService } from './services/user.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  async getUser(
    @Query('id') id?: string,
    @Query('username') username?: string,
    @Query('email') email?: string,
  ): Promise<HttpResponse> {
    return await this.userService.getUser({ id, username, email });
  }

  @Get('verify/:id')
  async verifyUser(@Param() param: { id: string }): Promise<HttpResponse> {
    return await this.userService.verifyUser(param);
  }

  @Post('')
  async addUser(@Body() user: UserDTO): Promise<HttpResponse> {
    return await this.userService.addUser(user);
  }

  @Post('username')
  async checkUsernameIsUsed(@Body() user: UsernameDTO): Promise<HttpResponse> {
    return await this.userService.checkUsernameIsUsed(user);
  }

  @Post('create_token')
  async createResetPasswordToken(
    @Body() email: EmailDTO,
  ): Promise<HttpResponse> {
    return await this.userService.createResetPasswordToken(email);
  }

  @Post('password_reset')
  async resetPassword(
    @Body() resetPassword: ResetPasswordDTO,
  ): Promise<HttpResponse> {
    return await this.userService.resetPassword(resetPassword);
  }

  @Patch('')
  async patchUser(
    @Body() data: { user: UserDTO; updatedUser: UserDTO },
  ): Promise<HttpResponse> {
    return await this.userService.patchUser(data);
  }

  @Delete('')
  async deleteUser(
    @Query('id') id?: string,
    @Query('username') username?: string,
    @Query('email') email?: string,
  ): Promise<HttpResponse> {
    return await this.userService.deleteUser({ id, username, email });
  }
}
