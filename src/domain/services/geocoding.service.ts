import { GeocodingAdapter } from '../adapters/geocoding.adapter';
import { Coordinates } from '../types/coordinates';
import { GetCoordinatesByAddressDto } from './dtos/coordinates-by-address.dto';
import { GetDistanceByAddressesDto } from './dtos/distance-by-addresses.dto';
import { GetDistanceDto } from './dtos/distance.dto';

export class GeocodingService {
  constructor(private geocodingAdapter: GeocodingAdapter) {}

  async getCoordinatesByAddress(
    methodDto: GetCoordinatesByAddressDto,
  ): Promise<Coordinates> {
    return await this.geocodingAdapter.getCoordinatesByAddress(methodDto);
  }

  async getDistanceByCoordinates(methodDto: GetDistanceDto): Promise<number> {
    return await this.geocodingAdapter.getDistanceByCoordinates(methodDto);
  }

  async getDistanceByAddresses(
    methodDto: GetDistanceByAddressesDto,
  ): Promise<number> {
    const { from, to } = methodDto;

    const fromCoordinates = await this.getCoordinatesByAddress(from);
    const toCoordinates = await this.getCoordinatesByAddress(to);

    const coordinates = { from: fromCoordinates, to: toCoordinates };

    return await this.getDistanceByCoordinates(coordinates);
  }
}
