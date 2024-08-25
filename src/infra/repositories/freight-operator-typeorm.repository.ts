import { Repository } from 'typeorm';
import { FreightOperatorRepository } from 'src/domain/repositories/freight-operator.repository';
import { FreightOperatorSchema } from '../schemas/freight-operator.schema';
import { FreightOperator } from 'src/domain/entities/freight-operator.entity';

export class FreightOperatorTypeOrmRepository
  implements FreightOperatorRepository
{
  constructor(private ormRepo: Repository<FreightOperatorSchema>) {}

  async create(
    freightOperator: FreightOperatorSchema,
  ): Promise<FreightOperator> {
    const model = this.ormRepo.create(freightOperator);
    const createdFreightOperator = await this.ormRepo.save(model);

    return new FreightOperator(createdFreightOperator);
  }

  async getMoreCheapOperator({
    distanceKM,
    cubicWeight,
  }: {
    distanceKM: number;
    cubicWeight: number;
  }): Promise<{
    operator: FreightOperatorSchema | null;
    totalCost: number;
    daysToDeliver: number;
  }> {
    const freightOperators = await this.ormRepo.find({
      relations: ['deliverSettings', 'address'],
    });

    if (!freightOperators || freightOperators.length === 0) {
      throw new Error('No freight operators found');
    }

    let cheapestOperator: FreightOperatorSchema | null = null;
    let totalCost = null;
    let daysToDeliver = 0;

    for (const operator of freightOperators) {
      let costPerCubicWeight = cubicWeight / operator.cubageFactor;

      if (costPerCubicWeight < 6) {
        costPerCubicWeight = 6;
      }

      const deliverySetting = operator.deliverSettings.find(
        (setting) =>
          distanceKM >= setting.initialDistance &&
          distanceKM <= setting.finalDistance,
      );

      const cost = costPerCubicWeight * deliverySetting.multipleofDistance;

      if (totalCost === null || totalCost < cost) {
        totalCost = Math.round(cost);
        cheapestOperator = operator;
        daysToDeliver = deliverySetting.daysToDeliver;
      }
    }

    return {
      operator: cheapestOperator,
      totalCost,
      daysToDeliver,
    };
  }

  async getMoreFastOperator({
    distanceKM,
    cubicWeight,
  }: {
    distanceKM: number;
    cubicWeight: number;
  }): Promise<{
    operator: FreightOperatorSchema | null;
    totalCost: number;
    daysToDeliver: number;
  }> {
    const freightOperators = await this.ormRepo.find({
      relations: ['deliverSettings', 'address'],
    });

    if (!freightOperators || freightOperators.length === 0) {
      throw new Error('No freight operators found');
    }

    let fastestOperator: FreightOperatorSchema | null = null;
    let shortestDaysToDeliver = null;
    let totalCost = 0;

    for (const operator of freightOperators) {
      for (const setting of operator.deliverSettings) {
        if (
          distanceKM >= setting.initialDistance &&
          distanceKM <= setting.finalDistance
        ) {
          let costPerCubicWeight = cubicWeight / operator.cubageFactor;

          if (costPerCubicWeight < 6) {
            costPerCubicWeight = 6;
          }

          const cost = costPerCubicWeight * setting.multipleofDistance;

          if (
            shortestDaysToDeliver === null ||
            shortestDaysToDeliver > setting.daysToDeliver
          ) {
            shortestDaysToDeliver = setting.daysToDeliver;
            fastestOperator = operator;
            totalCost = Math.round(cost);
          }
        }
      }
    }

    return {
      operator: fastestOperator,
      totalCost,
      daysToDeliver: shortestDaysToDeliver,
    };
  }
}
