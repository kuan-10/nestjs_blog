import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCatrgoryDto } from './dto/create-catrgory.dto';
import { UpdateCatrgoryDto } from './dto/update-catrgory.dto';

@Injectable()
export class CatrgoryService {
  constructor(private prisma:PrismaService){}
  create(createCatrgoryDto: CreateCatrgoryDto) {
    return this.prisma.category.create({
      data:createCatrgoryDto
    })
  }

  findAll() {
    return this.prisma.category.findMany()
  }

  findOne(id: number) {
    return this.prisma.category.findFirst({
      where:{
        id
      }
    });
  }

  update(id: number, updateCatrgoryDto: UpdateCatrgoryDto) {
    return this.prisma.category.update({
   where:{
    id
   },
    data:updateCatrgoryDto});
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where:{
        id
      }
    })
  }
}
