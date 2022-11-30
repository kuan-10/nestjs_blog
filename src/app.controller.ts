import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {PrismaClient} from '@prisma/client'

@Controller()
export class AppController {
  prisma:PrismaClient;
  constructor(private readonly appService: AppService) {
    this.prisma=new PrismaClient()
  }

  // @Get(':id')
  // getHello(@Param('id') id :number) {//添加管道对数据的验证
  //   return this.prisma.article.findUnique({
  //     where:{
  //       id:id
  //     }
  //   })
  // }
 
  // @Post('store')
  // async add(@Body(ValidationPipe) dto:createArticleDto){
  //   const article=await this.prisma.article.create({
  //     data:{
  //       title:dto.title,
  //       content:dto.content
  //     }
  //   })
  // }

}
