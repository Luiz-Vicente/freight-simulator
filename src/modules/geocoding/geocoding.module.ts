import { Module } from '@nestjs/common';
import { GoogleMapsGeocodingAdapter } from 'src/adapters/geocoding.adapter';
import { GeocodingService } from 'src/domain/services/geocoding.service';

@Module({
  providers: [
    {
      provide: GoogleMapsGeocodingAdapter,
      useFactory: () => {
        return new GoogleMapsGeocodingAdapter();
      },
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
