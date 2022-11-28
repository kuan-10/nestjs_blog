import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('register')
    register(@Body() dto:RegisterDto){
    return dto
    }
    
    @Post('login')
    login(@Body() dto:LoginDto){
        return "abc"
    }

}
