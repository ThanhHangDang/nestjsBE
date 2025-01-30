import { IsString, IsNumber, IsOptional, Length } from 'class-validator';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
} from 'class-validator';

@ValidatorConstraint()
export class IsUppercase implements ValidatorConstraintInterface {
  validate(value: any) {
    return value === value.toUpperCase();
  }

  // defaultMessage() {
  //   return 'Tên sản phẩm phải viết hoa.';
  // }
}

export default class CreateProductDto {
  @IsString({ message: 'Tên sản phẩm phải là chuỗi ký tự.' })
  @Length(3, 255, { message: 'Tên sản phẩm phải từ 3 ký tự trở lên.' })
  @Validate(IsUppercase, { message: 'Tên sản phẩm phải viết hoa.' })
  name: string;

  @IsNumber({}, { message: 'Giá sản phẩm phải là số.' })
  price: number;

  @IsOptional()
  @IsString()
  description?: string;
}
