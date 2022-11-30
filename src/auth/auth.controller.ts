import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('register')//用户注册
    register(@Body() dto:RegisterDto){
    return this.authService.register(dto)
    }
    
    @Post('login')//用户登录
    login(@Body() dto:LoginDto){
       return this.authService.login(dto)
    }

}
