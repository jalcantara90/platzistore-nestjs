import { CreateBrandDto } from './../dto/brand.dto';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BrandsService } from "../services/brand.service";

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.brandsService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateBrandDto) {
    return this.brandsService.create(body);
  }
}

