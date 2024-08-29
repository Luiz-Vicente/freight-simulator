import { Module } from '@nestjs/common';
import { AxiosHttpClient } from 'src/interfaces/http/axios.client';

@Module({
  providers: [AxiosHttpClient],
  exports: [AxiosHttpClient],
})
export class HttpClientModule {}
