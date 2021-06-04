import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { BrandsController } from './brands/brands.controller';
import { UsersController } from './users/users.controller';
import { CostumersController } from './costumers/costumers.controller';
import { OrdersController } from './orders/orders.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    UsersController,
    CostumersController,
    OrdersController
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
