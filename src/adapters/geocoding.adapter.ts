import axios from 'axios';
import { GeocodingAdapter } from 'src/domain/adapters/geocoding.adapter';
import { Address } from 'src/domain/entities/address.entity';
import { CalculateDistanceDto } from 'src/domain/services/dtos/calculate-distance.dto';
import { Coordinates } from 'src/domain/types/coordinates';

export class GoogleMapsGeocodingAdapter implements GeocodingAdapter {
  private readonly apiKey = process.env.GOOGLE_MAPS_API_KEY;

  async getCoordinatesByAddress(address: Address): Promise<Coordinates> {
    const formattedAddress = `${address.street}, ${address.city}, ${address.zipCode}, ${address.country}`;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
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
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json`,
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
