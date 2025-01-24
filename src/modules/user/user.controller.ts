import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService){}
    @Get()
    index(){
        return [this.userService.getUsers(), this.authService.login()];
    }
}


