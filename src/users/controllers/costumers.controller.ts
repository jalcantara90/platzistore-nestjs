import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/costumer.dto';
import { CustomersService } from '../services/costumers.service';

@ApiTags('Customers')
@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
