import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('users') //Định nghĩa prefix cho tất cả route trong controller này
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  index() {
    return this.userService.findAll();
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.userService.find(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.userService.update(+id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
