import {
  FreightOperator,
  FreightOperatorInterface,
} from '../entities/freight-operator.entity';

export interface FreightOperatorRepository {
  create(freightOperator: FreightOperatorInterface): Promise<FreightOperator>;
  getMoreCheapOperator({
    distanceKM,
    cubicWeight,
  }: {
    distanceKM: number;
    cubicWeight: number;
  }): Promise<{
    operator: FreightOperator;
    totalCost: number;
    daysToDeliver: number;
  }>;
  getMoreFastOperator({
    distanceKM,
    cubicWeight,
  }: {
    distanceKM: number;
    cubicWeight: number;
  }): Promise<{
    operator: FreightOperator;
    totalCost: number;
    daysToDeliver: number;
  }>;
}
