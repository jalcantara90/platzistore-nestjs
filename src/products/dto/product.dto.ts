import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive, IsOptional, Min, ValidateIf, ValidateNested, IsMongoId } from 'class-validator'
import { ApiProperty, PartialType } from '@nestjs/swagger';import { CreateCategoryDto } from '../categories/dtos/category.dto';
;

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly stock: number;

  @IsUrl()
  @ApiProperty()
  readonly image: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  readonly category: CreateCategoryDto;

  @IsMongoId()
  @IsNotEmpty()
  readonly brand: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
  @IsOptional() @IsPositive() limit: number;
  @IsOptional() @Min(0) offset: number;

  @IsOptional()
  @Min(0)
  minPrice: number;

  @ValidateIf(params => params.minPrice)
  @IsPositive()
  maxPrice: number;
}
