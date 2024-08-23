import { CreateFreightOperatorDto } from 'src/domain/services/dtos/create-freight-operator.dto';
import { FreightOperator } from '../entities/freight-operator.entity';
import { FreightOperatorRepository } from '../repositories/freight-operator.repository';

export class FreightOperatorService {
  constructor(private freightOperatorRepo: FreightOperatorRepository) {}

  async create(
    createFreightOperatorDto: CreateFreightOperatorDto,
  ): Promise<FreightOperator> {
    const newFreightOperator = new FreightOperator(createFreightOperatorDto);
    const createdFreitghtOperator =
      await this.freightOperatorRepo.create(newFreightOperator);

    return createdFreitghtOperator;
  }

  async getMoreCheapOperator({
    distanceKM,
    cubicWeight,
  }: {
    distanceKM: number;
    cubicWeight: number;
  }): Promise<{
    operator: FreightOperator;
    totalCost: number;
    daysToDeliver: number;
  }> {
    return this.freightOperatorRepo.getMoreCheapOperator({
      distanceKM,
      cubicWeight,
    });
  }

  async getMoreFastOperator({
    distanceKM,
    cubicWeight,
  }: {
    distanceKM: number;
    cubicWeight: number;
  }): Promise<{
    operator: FreightOperator;
    totalCost: number;
    daysToDeliver: number;
  }> {
    return this.freightOperatorRepo.getMoreFastOperator({
      distanceKM,
      cubicWeight,
    });
  }
}
