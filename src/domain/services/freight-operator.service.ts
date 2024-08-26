import { CreateFreightOperatorDto } from 'src/domain/services/dtos/freight-operator.dto';
import { FreightOperator } from '../entities/freight-operator.entity';
import { FreightOperatorRepository } from '../repositories/freight-operator.repository';
import {
  CheapestOperatorDto,
  GetCheapestOperatorDto,
} from './dtos/cheapest-operator.dto';
import {
  FastestOperatorDto,
  GetFastestOperatorDto,
} from './dtos/fastest-operator.dto copy';

export class FreightOperatorService {
  constructor(private freightOperatorRepo: FreightOperatorRepository) {}

  async create(methodDto: CreateFreightOperatorDto): Promise<FreightOperator> {
    const newFreightOperator = new FreightOperator(methodDto);
    return await this.freightOperatorRepo.create(newFreightOperator);
  }

  async getMoreCheapOperator(
    methodDto: GetCheapestOperatorDto,
  ): Promise<CheapestOperatorDto> {
    return this.freightOperatorRepo.getMoreCheapOperator(methodDto);
  }

  async getMoreFastOperator(
    methodDto: GetFastestOperatorDto,
  ): Promise<FastestOperatorDto> {
    return this.freightOperatorRepo.getMoreFastOperator(methodDto);
  }
}
