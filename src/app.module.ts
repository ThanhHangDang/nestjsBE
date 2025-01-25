import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'caphemanhzu1997',
      database: 'test',
      entities: [], //Danh sách các entity sẽ ánh xạ
      synchronize: true, //Tự động tạo bảng từ entity 
    })
  ], //CHỗ để import các module nhỏ
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
