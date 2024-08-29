import { CollectionAddress } from 'src/domain/entities/collection-address.entity';
import { DeliveryAddress } from 'src/domain/entities/delivery-address.entity';

export class CreateFreightQuotationDto {
  shopkeeperId: string;
  collectionAddress: CollectionAddress;
  deliveryAddress: DeliveryAddress;
  heightCM: number;
  widthCM: number;
  lengthCM: number;
}
