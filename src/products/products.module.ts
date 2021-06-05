import { CategoriesService } from './categories/services/category.service';
import { Category, CategorySchema } from './categories/entities/category.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories/controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './entities/product.entity';
import { BrandsController } from './brands/controllers/brands.controller';
import { Brand, BrandSchema } from './brands/entities/brand.entity';
import { BrandsService } from './brands/services/brand.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema
      },
      {
        name: Category.name,
        schema: CategorySchema
      },
      {
        name: Brand.name,
        schema: BrandSchema
      }
    ])
  ],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, CategoriesService, BrandsService],
  exports: [ProductsService]
})
export class ProductsModule {}
