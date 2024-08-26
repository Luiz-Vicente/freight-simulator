import { FreightOperator } from 'src/domain/entities/freight-operator.entity';

export interface GetFastestOperatorDto {
  distanceKM: number;
  cubicWeight: number;
}

export interface FastestOperatorDto {
  operator: FreightOperator;
  totalCost: number;
  daysToDeliver: number;
}
