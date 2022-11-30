import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import Validate from './auth/common/validate';
import { TransformInterceptor } from './Interceptor/TransfromDataInterceptor';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new Validate())//对数据进行各项验证
  app.useGlobalInterceptors(new TransformInterceptor())//对数据进行拦截，把数据包裹在data里面，格式化数据
  app.setGlobalPrefix('api')//将后端接口设置成api前缀，以后所有请求都需要加上api前缀才可以进行访问了
  await app.listen(3000);
}
bootstrap();
