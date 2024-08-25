import { GeocodingAdapter } from '../adapters/geocoding.adapter';
import { Address } from '../entities/address.entity';
import { Coordinates } from '../types/coordinates';
import { CalculateDistanceDto } from './dtos/calculate-distance.dto';

export class GeocodingService {
  constructor(private geocodingAdapter: GeocodingAdapter) {}

  async getCoordinatesByAddress(address: Address): Promise<Coordinates> {
    return this.geocodingAdapter.getCoordinatesByAddress(address);
  }

  async calculateDistanceByCoordinates(
    calculateDistanceDto: CalculateDistanceDto,
  ): Promise<number> {
    return this.geocodingAdapter.calculateDistanceByCoordinates(
      calculateDistanceDto,
    );
  }

  async calculateDistanceByAddresses({
    from,
    to,
  }: {
    from: Address;
    to: Address;
  }): Promise<number> {
    const fromCoordinates = await this.getCoordinatesByAddress(from);
    const toCoordinates = await this.getCoordinatesByAddress(to);

    return this.calculateDistanceByCoordinates({
      from: fromCoordinates,
      to: toCoordinates,
    });
  }
}
