import {
  FreightOperator,
  FreightOperatorInterface,
} from '../entities/freight-operator.entity';

export interface FreightOperatorRepository {
  create(freightOperator: FreightOperatorInterface): Promise<FreightOperator>;
  getCheapest({
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
  getFastest({
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
