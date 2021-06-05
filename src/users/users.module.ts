import { OrdersService } from './services/orders.service';

import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './../products/products.module';
import { UsersController } from './controllers/users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/costumers.service';
import { CustomerController } from './controllers/costumers.controller';

import { Costumer, CostumerSchema } from './entities/costumer.entity';
import { Order, OrderSchema } from './entities/orders.entity';
import { OrdersController } from './controllers/orders.controller';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      },
      {
        name: Costumer.name,
        schema: CostumerSchema
      },
      {
        name: Order.name,
        schema: OrderSchema
      }
    ])
  ],
  controllers: [
    UsersController,
    CustomerController,
    OrdersController
  ],
  providers: [
    UsersService,
    CustomersService,
    OrdersService
  ],
})
export class UsersModule {}
