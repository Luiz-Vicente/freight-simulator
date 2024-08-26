import { FreightOperator } from 'src/domain/entities/freight-operator.entity';

export interface GetCheapestOperatorDto {
  distanceKM: number;
  cubicWeight: number;
}

export interface CheapestOperatorDto {
  operator: FreightOperator;
  totalCost: number;
  daysToDeliver: number;
}
