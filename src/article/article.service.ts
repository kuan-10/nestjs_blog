import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma:PrismaService,private readonly config:ConfigService){}
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data:{
        title:createArticleDto.title,
        content:createArticleDto.content,
        categoryId:1
      }
    });
  }

 async findAll(page=1) {
    const row=this.config.get("ARTICLE_PAGE_ROW")//获取文章总数
    const article=await this.prisma.article.findMany({
      skip:(page-1)*row,
      take:+row
    })
    const total=await this.prisma.article.count()
    return {
      meta:{
        current_path:page,
        page_row:row,
        total,
        total_page:Math.ceil(total/row)
      },
      data:article
    }
  }

  findOne(id: number) {
    return this.prisma.article.findFirst({
      where:{
        id
      }
    })
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where:{
        id
      },
      data:updateArticleDto
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where:{
        id
      }
    })
  }
}
