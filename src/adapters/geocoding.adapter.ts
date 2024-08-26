import {
  DistanceMatrixResponse,
  GeocodeResponse,
} from '@googlemaps/google-maps-services-js';
import { GeocodingAdapter } from 'src/domain/adapters/geocoding.adapter';
import { Address } from 'src/domain/entities/address.entity';
import { HttpClient } from 'src/domain/interfaces/http.client';
import { CalculateDistanceDto } from 'src/domain/services/dtos/calculate-distance.dto';
import { Coordinates } from 'src/domain/types/coordinates';

export class GoogleMapsGeocodingAdapter implements GeocodingAdapter {
  constructor(
    private readonly apiKey: string,
    private geocodingHttpClient: HttpClient,
  ) {}

  async getCoordinatesByAddress(address: Address): Promise<Coordinates> {
    const formattedAddress = `${address.street}, ${address.city}, ${address.zipCode}, ${address.country}`;
    const response = await this.geocodingHttpClient.get<GeocodeResponse>(
      'geocode/json',
      {
        params: {
          address: formattedAddress,
          key: this.apiKey,
        },
      },
    );

    if (response.data.status !== 'OK') {
      throw new Error('Failed to get coordinates');
    }

    const location = response.data.results[0].geometry.location;
    return {
      latitude: location.lat,
      longitude: location.lng,
    };
  }

  async calculateDistanceByCoordinates(
    calculateDistanceDto: CalculateDistanceDto,
  ): Promise<number> {
    const { from, to } = calculateDistanceDto;
    const response = await this.geocodingHttpClient.get<DistanceMatrixResponse>(
      'distancematrix/json',
      {
        params: {
          origins: `${from.latitude},${from.longitude}`,
          destinations: `${to.latitude},${to.longitude}`,
          key: this.apiKey,
        },
      },
    );

    if (response.data.status !== 'OK') {
      throw new Error('Failed to calculate distance');
    }

    const distance = response.data.rows[0].elements[0].distance.value;
    return distance / 1000;
  }
}
