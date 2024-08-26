import { Shopkeeper, ShopkeeperInterface } from '../entities/shopkeeper.entity';

export interface ShopkeeperRepository {
  create(shopkeeper: ShopkeeperInterface): Promise<Shopkeeper>;
  findById(FindShopeekerByIdDto): Promise<Shopkeeper | null>;
}
