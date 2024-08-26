import { Coordinates } from 'src/domain/types/coordinates';

export interface GetDistanceDto {
  from: Coordinates;
  to: Coordinates;
}
