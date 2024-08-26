import { Shopkeeper } from '../entities/shopkeeper.entity';
import { ShopkeeperRepository } from '../repositories/shopkeeper.repository';
import {
  CreateShopkeeperDto,
  FindShopeekerByIdDto,
} from './dtos/shopkeeper.dto';

export class ShopkeeperService {
  constructor(private shopkeeperRepo: ShopkeeperRepository) {}

  async create(methodDto: CreateShopkeeperDto): Promise<Shopkeeper> {
    const newShopkeeper = new Shopkeeper(methodDto);
    return await this.shopkeeperRepo.create(newShopkeeper);
  }

  async findById(methodDto: FindShopeekerByIdDto): Promise<Shopkeeper | null> {
    return this.shopkeeperRepo.findById(methodDto.id);
  }
}
