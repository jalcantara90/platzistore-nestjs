import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/shared/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getAll(@Query() params: any) {
    const { limit, offset } = params;

    return this.productsService.getAll({limit, offset});
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.delete(productId);
  }

  @Put(':productId')
  update(@Param('productId', ParseIntPipe) productId: number, @Body() body: UpdateProductDto) {
    return this.productsService.update(productId, body);
  }
}
