import { Shopkeeper } from '../entities/shopkeeper.entity';
import { ShopkeeperRepository } from '../repositories/shopkeeper.repository';
import { CreateShopkeeperDto } from './dtos/create-shopkeeper.dto';

export class ShopkeeperService {
  constructor(private shopkeeperRepo: ShopkeeperRepository) {}

  async create(createShopkeeperDto: CreateShopkeeperDto): Promise<Shopkeeper> {
    const newShopkeeper = new Shopkeeper(createShopkeeperDto);
    const createdShopkeeper = await this.shopkeeperRepo.create(newShopkeeper);

    return createdShopkeeper;
  }

  async findById(id: string): Promise<Shopkeeper | null> {
    return this.shopkeeperRepo.findById(id);
  }
}
