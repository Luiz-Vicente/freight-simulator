import { Body, Controller, Post } from '@nestjs/common';
import { CreateFreightOperatorDto } from 'src/domain/services/dtos/create-freight-operator.dto';
import { FreightOperatorService } from 'src/domain/services/freight-operator.service';

@Controller('freight-operators')
export class FreightOperatorController {
  constructor(
    private readonly freightOperatorService: FreightOperatorService,
  ) {}

  @Post()
  create(@Body() createFreightOperatorDto: CreateFreightOperatorDto) {
    return this.freightOperatorService.create(createFreightOperatorDto);
  }
}
