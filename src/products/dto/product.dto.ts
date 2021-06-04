import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive } from 'class-validator'
import { PartialType } from '@nestjs/swagger';;

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
