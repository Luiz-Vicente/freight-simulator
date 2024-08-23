import {
  FreightQuote,
  FreightQuoteInterface,
} from '../entities/freight-quote.entity';

export interface FreightQuoteRepository {
  create(freightQuote: FreightQuoteInterface): Promise<FreightQuote>;
}
