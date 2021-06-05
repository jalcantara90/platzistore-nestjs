import { CreateBrandDto } from './../dto/brand.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Brand } from "../entities/brand.entity";

@Injectable()
export class BrandsService {

  constructor(
    @InjectModel(Brand.name) private brandModel: Model<Brand>,
  ) {}

  findAll() {
    return this.brandModel.find().exec();
  }

  async findOne(id: string) {
    const brand = await this.brandModel.findById(id).exec();
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  async create(payload: CreateBrandDto) {
    const brand = await this.brandModel.create(payload);

    return brand.save();
  }
}
