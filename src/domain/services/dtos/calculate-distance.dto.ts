import { Coordinates } from 'src/domain/types/coordinates';

export interface CalculateDistanceDto {
  from: Coordinates;
  to: Coordinates;
}
