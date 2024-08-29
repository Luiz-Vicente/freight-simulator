import {
  FreightQuotation,
  FreightQuotationInterface,
} from '../entities/freight-quotation.entity';

export interface FreightQuotationRepository {
  create(FreightQuotation: FreightQuotationInterface): Promise<FreightQuotation>;
}
