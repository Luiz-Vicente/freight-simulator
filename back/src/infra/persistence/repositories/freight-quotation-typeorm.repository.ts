import { Repository } from 'typeorm';
import { FreightQuotationSchema } from '../schemas/freight-quotation.schema';
import { FreightQuotationRepository } from 'src/domain/repositories/freight-quotation.repository';
import { FreightQuotationInterface } from 'src/domain/entities/freight-quotation.entity';

export class FreightQuotationTypeOrmRepository implements FreightQuotationRepository {
  constructor(private ormRepo: Repository<FreightQuotationSchema>) {}

  async create(
    FreightQuotation: FreightQuotationInterface,
  ): Promise<FreightQuotationSchema> {
    const model = this.ormRepo.create(FreightQuotation);
    const resp = await this.ormRepo.save(model);

    return resp;
  }
}
