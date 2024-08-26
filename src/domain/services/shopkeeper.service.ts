import { Shopkeeper } from '../entities/shopkeeper.entity';
import { ShopkeeperRepository } from '../repositories/shopkeeper.repository';
import { CreateShopkeeperDto } from './dtos/shopkeeper.dto';

export class ShopkeeperService {
  constructor(private shopkeeperRepo: ShopkeeperRepository) {}

  async create(methodDto: CreateShopkeeperDto): Promise<Shopkeeper> {
    const newShopkeeper = new Shopkeeper(methodDto);
    return await this.shopkeeperRepo.create(newShopkeeper);
  }

  async findById(id: string): Promise<Shopkeeper | null> {
    return this.shopkeeperRepo.findById(id);
  }
}
