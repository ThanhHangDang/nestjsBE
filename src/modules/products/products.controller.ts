import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UsePipes,
  Req,
  // ValidationPipe,
  BadRequestException,
  ValidationError,
  Inject,
  ArgumentMetadata,
  PipeTransform,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import CreateProductDto from '../dto/create-product.dto';
import UpdateProductDto from '../dto/update-product.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

export class ValidationPipe implements PipeTransform {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const id = this.request['params'].id;
    const { name } = value;
    if (name === 'SẢN PHẨM 1' && +id === 1) {
      throw new BadRequestException(
        'Tên sản phẩm không được phép là SẢN PHẨM 1',
      );
    }
    return value;
  }
}

@Controller('products')

// @UsePipes(
//   new ValidationPipe({
//     exceptionFactory: (validationErrors: ValidationError[] = []) => {
//       return new BadRequestException(
//         validationErrors.map((error) => ({
//           // field: error.property,
//           // message: Object.values(error.constraints || {}).join(', '),

//           [error.property]: Object.values(error.constraints || {})[0],
//         })),
//       );
//     },
//   }),
// )
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Req() req: Request & { user: String }) {
    console.log(req.user);
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Sản phẩm không tìm thấy.', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Post()
  create(@Body() productData: CreateProductDto) {
    return this.productsService.create(productData);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body(ValidationPipe) productData: UpdateProductDto,
  ) {
    return this.productsService.update(id, productData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Sản phẩm không tìm thấy.', HttpStatus.NOT_FOUND);
    }
    return this.productsService.remove(id);
  }
}
