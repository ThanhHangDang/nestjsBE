import {
  IsString,
  IsNumber,
  IsOptional,
  Length,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
} from 'class-validator';

export default class UpdateProductDto {
  id: number;

  @IsString({ message: 'Tên sản phẩm phải là chuỗi ký tự.' })
  @Length(3, 255, { message: 'Tên sản phẩm phải từ 3 ký tự trở lên.' })
  name: string;

  @IsNumber({}, { message: 'Giá sản phẩm phải là số.' })
  price: number;

  @IsString({ message: 'Mô tả sản phẩm phải là chuỗi ký tự.' })
  description: string;
}

// import CreateProductDto from '../dto/create-product.dto';

// export default class UpdateProductDto extends CreateProductDto {}
