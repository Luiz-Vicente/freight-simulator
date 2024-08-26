import { FreightOperator } from 'src/domain/entities/freight-operator.entity';

export interface GetCheapestDto {
  distanceKM: number;
  cubicWeight: number;
}

export interface CheapestDto {
  operator: FreightOperator;
  totalCost: number;
  daysToDeliver: number;
}
