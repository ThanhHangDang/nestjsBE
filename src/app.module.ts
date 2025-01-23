import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule], //CHỗ để import các module nhỏ
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
