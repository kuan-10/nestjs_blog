// import {Injectable} from '@nestjs/common'
// import { ConfigService } from '@nestjs/config'
// import { PassportStrategy } from '@nestjs/passport' 
// import { PrismaService } from 'src/prisma/prisma.service'
// import {ExtractJwt } from 'passport-jwt'
// import {Stragety} from 'passport-local'
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Stragety,'jwt'){
//     constructor(configService:ConfigService,private prisma:PrismaService){
//         super({
//             //解析用户提交的Bearer Token header数据
//             jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
//             //加密码的secret
//             secretOrKey:configService.get("SECRET_TOKEN")
//         })
//     }
//     async validate({sub:id}){
//         //查询后会放在Request对象里面
//         return this.prisma.user.findUnique({
//             where:{
//                 id
//             }
//         })
//     }
// } 
