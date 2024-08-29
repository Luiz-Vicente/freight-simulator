import { Address } from '../entities/address.entity';
import { GetDistanceDto } from '../services/dtos/distance.dto';
import { Coordinates } from '../types/coordinates';

export interface GeocodingAdapter {
  getCoordinatesByAddress(address: Address): Promise<Coordinates>;
  getDistanceByCoordinates(getDistanceDto: GetDistanceDto): Promise<number>;
}
