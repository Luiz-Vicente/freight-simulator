import { CreateFreightOperatorDto } from 'src/domain/services/dtos/freight-operator.dto';
import { FreightOperator } from '../entities/freight-operator.entity';
import { FreightOperatorRepository } from '../repositories/freight-operator.repository';
import { CheapestDto, GetCheapestDto } from './dtos/cheapest-operator.dto';
import { FastestDto, GetFastestDto } from './dtos/fastest-operator.dto copy';

export class FreightOperatorService {
  constructor(private freightOperatorRepo: FreightOperatorRepository) {}

  async create(methodDto: CreateFreightOperatorDto): Promise<FreightOperator> {
    const newFreightOperator = new FreightOperator(methodDto);
    return await this.freightOperatorRepo.create(newFreightOperator);
  }

  async getCheapest(methodDto: GetCheapestDto): Promise<CheapestDto> {
    return this.freightOperatorRepo.getCheapest(methodDto);
  }

  async getFastest(methodDto: GetFastestDto): Promise<FastestDto> {
    return this.freightOperatorRepo.getFastest(methodDto);
  }
}
