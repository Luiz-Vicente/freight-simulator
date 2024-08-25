import { Address } from '../entities/address.entity';
import { CalculateDistanceDto } from '../services/dtos/calculate-distance.dto';
import { Coordinates } from '../types/coordinates';

export interface GeocodingAdapter {
  getCoordinatesByAddress(address: Address): Promise<Coordinates>;
  calculateDistanceByCoordinates(
    calculateDistanceDto: CalculateDistanceDto,
  ): Promise<number>;
}
