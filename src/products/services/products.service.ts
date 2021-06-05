import { CreateProductDto, UpdateProductDto, FilterProductsDto } from './../dto/product.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Product } from '../entities/product.entity';


@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();

    if (!product) throw new NotFoundException();

    return product
  }

  async getAll(params?: FilterProductsDto) {
    if (params) {
      const { limit, offset, minPrice, maxPrice } = params;
      const filters: FilterQuery<Product> = {};

      if (minPrice && maxPrice) {
        filters.price = {
          $gte: minPrice,
          $lte: maxPrice
        };
      }

      return this.productModel.find(filters).populate('brand').skip(offset).limit(limit).exec();
    }

    return await this.productModel.find().populate('brand').exec();
  }

  create(payload: CreateProductDto) {
    const newProduct = new this.productModel(payload);

    return newProduct.save();
  }

  async update(id: string, payload: UpdateProductDto) {
    const product = await (await this.productModel.findByIdAndUpdate(id, { $set: payload }, { new: true }));

    if (!product) throw new NotFoundException(`Product #${id} not found`);

    return await product.save();
  }

  async delete(id: string) {
    return await this.productModel.findByIdAndDelete(id).exec();
  }

}
