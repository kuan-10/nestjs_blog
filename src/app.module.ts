import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { ConfigModule } from '@nestjs/config';
import { CatrgoryModule } from './catrgory/catrgory.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';


@Module({
  imports: [AuthModule, PrismaModule, ArticleModule,ConfigModule.forRoot({
    isGlobal:true
  }), CatrgoryModule, UploadModule],
  controllers: [UploadController],
  providers: [UploadService],

})
export class AppModule {}
