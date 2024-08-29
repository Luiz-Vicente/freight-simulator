import { FreightOperator } from 'src/domain/entities/freight-operator.entity';

export interface GetFastestDto {
  distanceKM: number;
  cubicWeight: number;
}

export interface FastestDto {
  operator: FreightOperator;
  totalCost: number;
  daysToDeliver: number;
}
