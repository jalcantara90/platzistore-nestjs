import { environments } from './environments';
import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './brands/brands.controller';
import { CostumersController } from './costumers/costumers.controller';
import { OrdersController } from './orders/orders.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

import config from './config';
import * as Joi from 'joi';


@Module({
  imports: [
    UsersModule,
    ProductsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required()
      })
    })
  ],
  controllers: [
    AppController,
    BrandsController,
    CostumersController,
    OrdersController
  ],
  providers: [
    AppService,

  ],
})
export class AppModule {}
