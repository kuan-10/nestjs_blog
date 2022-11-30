import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';

@Injectable()
export class AuthService {
   constructor(private readonly prisma:PrismaService,private readonly jwt:JwtService){//依赖注入prisma

   }
   //创建用户
   async register(dto:RegisterDto){
   const user=await this.prisma.user.create({
        data:{
            name:dto.name,
            password:await hash(dto.password)
        }
    })
    return this.token(user)
   }
   //用户登录
   async login(dto:LoginDto){
    const user=await this.prisma.user.findUnique({
        where:{
            name:dto.name
        }
     })
     if(!(await verify(user.password,dto.password))){
    throw new BadRequestException("用户密码错误")
     }
     return this.token(user)
    }
   private async token({id,name}){
    return {
        token:  await this.jwt.signAsync({
            name,
            sub:id
        })
    }
   }
}
