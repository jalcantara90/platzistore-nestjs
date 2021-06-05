import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';
import config from './config';


@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('MONGO') private datatabase: Db
  ) {}

  getHello(): string {
    return 'Hello World!' + this.configService.apiKey;
  }

  async getTasks() {
    const tasksCollections = this.datatabase.collection('tasks');
    return await tasksCollections.find().toArray();
  }
}
