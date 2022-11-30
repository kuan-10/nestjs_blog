import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CatrgoryService } from './catrgory.service';
import { CreateCatrgoryDto } from './dto/create-catrgory.dto';
import { UpdateCatrgoryDto } from './dto/update-catrgory.dto';

@Controller('category')
export class CatrgoryController {
  constructor(private readonly catrgoryService: CatrgoryService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createCatrgoryDto: CreateCatrgoryDto) {
    return this.catrgoryService.create(createCatrgoryDto);
  }

  @Get()
  findAll() {
    return this.catrgoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catrgoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatrgoryDto: UpdateCatrgoryDto) {
    return this.catrgoryService.update(+id, updateCatrgoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catrgoryService.remove(+id);
  }
}
