import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import CreateProductDto from '../dto/create-product.dto';
import UpdateProductDto from '../dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
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
  create(@Body(new ValidationPipe()) productData: CreateProductDto) {
    return this.productsService.create(productData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() productData: UpdateProductDto) {
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
