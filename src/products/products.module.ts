import { CategoriesController } from './categories/categories.controller';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
