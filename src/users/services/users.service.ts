import { Order } from './../entities/orders.entity';
import { ProductsService } from '../../products/services/products.service';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    private productsService: ProductsService,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  // create(data: CreateUserDto) {
  //   this.counterId = this.counterId + 1;
  //   const newUser = {
  //     id: this.counterId,
  //     ...data,
  //   };
  //   this.users.push(newUser);
  //   return newUser;
  // }

  // update(id: number, changes: UpdateUserDto) {
  //   const user = this.findOne(id);
  //   const index = this.users.findIndex((item) => item.id === id);
  //   this.users[index] = {
  //     ...user,
  //     ...changes,
  //   };
  //   return this.users[index];
  // }

  // remove(id: number) {
  //   const index = this.users.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   this.users.splice(index, 1);
  //   return true;
  // }

  // async getOrdersByUser(id: number): Promise<Order> {
  //   const user = this.findOne(id);

  //   return {
  //     date: new Date(),
  //     user,
  //     products: await this.productsService.getAll({})
  //   }
  // }
}
