import { ProductsModule } from './../products/products.module';
import { UsersController } from './controllers/users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/costumers.service';
import { CostumersController } from './controllers/costumers.controller';

@Module({
  controllers: [UsersController, CostumersController],
  providers: [
    UsersService,
    CustomersService,

  ],
  imports: [ProductsModule]
})
export class UsersModule {}
