import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFreightQuotationDto } from 'src/domain/services/dtos/freight-quotation.dto';
import { FreightQuotationService } from 'src/domain/services/freight-quotation.service';

@Controller('freight-quotations')
export class FreightQuotationController {
  constructor(
    private readonly FreightQuotationService: FreightQuotationService,
  ) {}

  @Post()
  create(@Body() FreightQuotationDto: CreateFreightQuotationDto) {
    return this.FreightQuotationService.create(FreightQuotationDto);
  }

  @Get()
  findAll() {
    return 'ola';
  }
}
