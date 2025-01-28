import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';
import { ProductsModule } from './modules/products/products.module';
import { Product } from './entities/Product';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'caphemanhzu1997',
      database: 'testnestjs',
      entities: [User, Product], //Danh sách các entity sẽ ánh xạ
      synchronize: true, //Tự động tạo bảng từ entity
    }),
    ProductsModule,
  ], //CHỗ để import các module nhỏ
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
