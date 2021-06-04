import { Module, Global, HttpService, HttpModule } from '@nestjs/common';


const API_KEY = '21312321';
const API_KEY_PROD = 'PROD21312321';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();

        return tasks.data;
      },
      inject: [HttpService]
    }
  ],
  exports: ['API_KEY', 'TASKS']
})
export class DatabaseModule {}
