import { FilterProductsDto } from './../dto/product.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/shared/parse-int.pipe';
import { MongoIdPipe } from '../../shared/mongo-id.pipe';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductsService } from '../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getAll(@Query() params: FilterProductsDto) {
    return this.productsService.getAll(params);
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Delete(':productId')
  delete(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.delete(productId);
  }

  @Put(':productId')
  update(@Param('productId', MongoIdPipe) productId: string, @Body() body: UpdateProductDto) {
    return this.productsService.update(productId, body);
  }
}
