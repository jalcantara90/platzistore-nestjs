import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/costumer.dto';
import { Costumer } from '../entities/costumer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Costumer.name) private customerModel: Model<Costumer>,
  ) {}

  findAll() {
    return this.customerModel.find().exec();
  }

  async findOne(id: string) {
    return this.customerModel.findById(id);
  }

  create(data: CreateCustomerDto) {
    console.log(data);
    const newModel = new this.customerModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateCustomerDto) {
    return this.customerModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
