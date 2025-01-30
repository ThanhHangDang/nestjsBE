import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';
import { ProductsModule } from './modules/products/products.module';
import { Product } from './entities/Product';
import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';
import { RoleMiddleware } from './middleware/role/role.middleware';

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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware, RoleMiddleware).forRoutes(
      {
        path: '/products/*',
        method: RequestMethod.ALL,
      },
      {
        path: '/products',
        method: RequestMethod.ALL,
      },
    );

    // consumer.apply(RoleMiddleware).forRoutes('*');
  }
}
