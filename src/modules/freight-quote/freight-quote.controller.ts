import { Body, Controller, Post } from '@nestjs/common';
import { CreateFreightQuoteDto } from 'src/domain/services/dtos/freight-quote.dto';
import { FreightQuoteService } from 'src/domain/services/freight-quote.service';

@Controller('freight-quotes')
export class FreightQuoteController {
  constructor(private readonly freightQuoteService: FreightQuoteService) {}

  @Post()
  create(@Body() freightQuoteDto: CreateFreightQuoteDto) {
    return this.freightQuoteService.create(freightQuoteDto);
  }
}
