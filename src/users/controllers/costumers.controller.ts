import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('costumers')
@Controller('costumers')
export class CostumersController {}
