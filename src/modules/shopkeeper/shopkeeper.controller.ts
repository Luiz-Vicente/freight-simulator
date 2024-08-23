import { Body, Controller, Post } from '@nestjs/common';
import { CreateShopkeeperDto } from 'src/domain/services/dtos/create-shopkeeper.dto';
import { ShopkeeperService } from 'src/domain/services/shopkeeper.service';

@Controller('shopkeepers')
export class ShopkeeperController {
  constructor(private readonly shopkeeperService: ShopkeeperService) {}

  @Post()
  create(@Body() shopkeeperDto: CreateShopkeeperDto) {
    return this.shopkeeperService.create(shopkeeperDto);
  }
}
