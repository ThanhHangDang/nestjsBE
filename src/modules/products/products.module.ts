import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../entities/Product';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { LoggingMiddleware } from '../../middleware/logging/logging.middleware';
import { RequestMethod } from '@nestjs/common/enums/request-method.enum';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
