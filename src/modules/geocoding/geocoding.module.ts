import { Module } from '@nestjs/common';
import { GoogleMapsGeocodingAdapter } from 'src/adapters/geocoding.adapter';
import { HttpClient } from 'src/domain/interfaces/http.client';
import { GeocodingService } from 'src/domain/services/geocoding.service';
import { AxiosHttpClient } from 'src/interfaces/http/axios.client';
import { HttpClientModule } from '../http-client/http-client.module';

@Module({
  imports: [HttpClientModule],
  providers: [
    {
      provide: AxiosHttpClient,
      useFactory: () => {
        return new AxiosHttpClient('https://maps.googleapis.com/maps/api', {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        });
      },
    },
    {
      provide: GoogleMapsGeocodingAdapter,
      useFactory: (httpClient: HttpClient) => {
        return new GoogleMapsGeocodingAdapter(
          process.env.GOOGLE_MAPS_API_KEY,
          httpClient,
        );
      },
      inject: [AxiosHttpClient],
    },
    {
      provide: GeocodingService,
      useFactory: (repo: GoogleMapsGeocodingAdapter) => {
        return new GeocodingService(repo);
      },
      inject: [GoogleMapsGeocodingAdapter],
    },
  ],
  exports: [GeocodingService],
})
export class GeocodingModule {}
