import { Body, Controller, Post } from '@nestjs/common';
import { CreateAddressDto } from '../../domain/services/dtos/address.dto';
import { AddressService } from 'src/domain/services/address.service';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addresService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addresService.create(createAddressDto);
  }
}
