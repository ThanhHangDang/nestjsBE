import { IsString, IsNumber, IsOptional, Length } from 'class-validator';

export default class CreateProductDto {
  @IsString({ message: 'Tên sản phẩm phải là chuỗi ký tự.' })
  @Length(3, 255, { message: 'Tên sản phẩm phải từ 3 ký tự trở lên.' })
  name: string;

  @IsNumber({}, { message: 'Giá sản phẩm phải là số.' })
  price: number;

  @IsOptional()
  @IsString()
  description?: string;
}
