import { MongoIdPipe } from './../../shared/mongo-id.pipe';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddOrderProducts, CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dto';

import { OrdersService } from '../services/orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }

  @ApiOperation({ summary: 'Remove product of order' })
  @Delete(':id/product/:productId')
  removeProduct(
    @Param('id', MongoIdPipe) id: string,
    @Param('productId', MongoIdPipe) productId: string
  ) {
    return this.ordersService.removeProduct(id, productId);
  }

  @Put(':id/products')
  updateProducts(@Param('id') id: string, @Body() { products }: AddOrderProducts) {
    return this.ordersService.addProducts(id, products);
  }
}
