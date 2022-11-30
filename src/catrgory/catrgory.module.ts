import { Module } from '@nestjs/common';
import { CatrgoryService } from './catrgory.service';
import { CatrgoryController } from './catrgory.controller';

@Module({
  controllers: [CatrgoryController],
  providers: [CatrgoryService]
})
export class CatrgoryModule {}
