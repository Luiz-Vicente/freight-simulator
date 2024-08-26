import { Repository } from 'typeorm';
import { FreightQuoteSchema } from '../schemas/freight-quote.schema';
import { FreightQuoteRepository } from 'src/domain/repositories/freight-quote.repository';
import { FreightQuoteInterface } from 'src/domain/entities/freight-quote.entity';

export class FreightQuoteTypeOrmRepository implements FreightQuoteRepository {
  constructor(private ormRepo: Repository<FreightQuoteSchema>) {}

  async create(
    freightQuote: FreightQuoteInterface,
  ): Promise<FreightQuoteSchema> {
    const model = this.ormRepo.create(freightQuote);
    const resp = await this.ormRepo.save(model);

    return resp;
  }
}
