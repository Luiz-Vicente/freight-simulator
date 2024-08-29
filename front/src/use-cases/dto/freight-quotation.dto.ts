import { CollectionAddressDto } from "./collection-address.dto";
import { DeliveryAddressDto } from "./delivery-address.dto";

export interface CreateFreightQuotationDto {
	shopkeeperId: string;
	collectionAddress: CollectionAddressDto;
	deliveryAddress: DeliveryAddressDto;
	heightCM: number;
	widthCM: number;
	lengthCM: number;
}
