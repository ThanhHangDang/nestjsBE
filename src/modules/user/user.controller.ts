import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('users') //Định nghĩa prefix cho tất cả route trong controller này
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService){}
    @Get()
    index(){
        return this.userService.findAll();
    }
    @Get('/:id')
    find(@Param('id') id: string){
        return "User" + id;
    }
    @Post()
    create(@Body() body: any){
        console.log(body)
        return body;
    }
    @Delete()
    delete(){
        return 'aaa'
    }
}


