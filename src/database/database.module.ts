import { Module, Global, HttpService, HttpModule } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MongoClient } from 'mongodb';
import config from '../config';

@Global()
@Module({
  imports: [
    // MongooseModule.forRoot(`mongodb://localhost:27018`, {
    //   user: 'root',
    //   pass: 'root',
    //   dbName: 'platzi-store'
    // }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          port,
          dbName
        } = configService.mongo;

        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName
        }
      },
      inject: [config.KEY]
    })
  ],
  providers: [
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          port,
          dbName
        } = configService.mongo;

        const uri = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;

        const client = new MongoClient(uri);
        await client.connect();
        return client.db(dbName);
      },
      inject: [config.KEY]
    }
  ],
  exports: ['MONGO', MongooseModule]
})
export class DatabaseModule {}
