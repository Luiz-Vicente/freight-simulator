import { Repository } from 'typeorm';
import { ShopkeeperRepository } from 'src/domain/repositories/shopkeeper.repository';
import { Shopkeeper } from 'src/domain/entities/shopkeeper.entity';
import { ShopkeeperSchema } from '../schemas/shopkeeper.schema';

export class ShopkeeperTypeOrmRepository implements ShopkeeperRepository {
  constructor(private ormRepo: Repository<ShopkeeperSchema>) {}

  async create(shopkeeper: ShopkeeperSchema): Promise<Shopkeeper> {
    const model = this.ormRepo.create(shopkeeper);
    const createdShopkeeper = await this.ormRepo.save(model);

    return new Shopkeeper(createdShopkeeper);
  }

  async findById(id: string): Promise<Shopkeeper | null> {
    const shopkeeper = await this.ormRepo.findOne({
      where: { id },
      relations: ['address'],
    });

    if (!shopkeeper) {
      return null;
    }

    return new Shopkeeper(shopkeeper);
  }
}
