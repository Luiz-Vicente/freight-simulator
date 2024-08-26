import { CollectionAddress } from './collection-address.entity';
import { DeliveryAddress } from './delivery-address.entity';
import { FreightOperator } from './freight-operator.entity';
import { Shopkeeper } from './shopkeeper.entity';

export interface FreightQuoteInterface {
  id?: string;
  heightCM: number;
  widthCM: number;
  lengthCM: number;
  cubicWeight: number;
  distanceKM: number;
  collectionAddress: CollectionAddress;
  deliveryAddress: DeliveryAddress;
  cheapestOperator: FreightOperator;
  cheapestTotalCost: number;
  cheapestDaysForDelivery: number;
  fastestOperator: FreightOperator;
  fastestTotalCost: number;
  fastestDaysForDelivery: number;
  shopkeeper: Shopkeeper;
}

export class FreightQuote {
  id?: string;
  heightCM: number;
  widthCM: number;
  lengthCM: number;
  cubicWeight: number;
  distanceKM: number;
  collectionAddress: CollectionAddress;
  deliveryAddress: DeliveryAddress;
  cheapestOperator: FreightOperator;
  cheapestTotalCost: number;
  cheapestDaysForDelivery: number;
  fastestOperator: FreightOperator;
  fastestTotalCost: number;
  fastestDaysForDelivery: number;
  shopkeeper: Shopkeeper;

  constructor({
    id,
    heightCM,
    widthCM,
    lengthCM,
    cubicWeight,
    distanceKM,
    collectionAddress,
    deliveryAddress,
    cheapestOperator,
    cheapestTotalCost,
    cheapestDaysForDelivery,
    fastestOperator,
    fastestTotalCost,
    fastestDaysForDelivery,
  }: FreightQuoteInterface) {
    this.id = id;
    this.heightCM = heightCM;
    this.widthCM = widthCM;
    this.lengthCM = lengthCM;
    this.cubicWeight = cubicWeight;
    this.distanceKM = distanceKM;
    this.collectionAddress = collectionAddress;
    this.deliveryAddress = deliveryAddress;
    this.cheapestOperator = cheapestOperator;
    this.cheapestTotalCost = cheapestTotalCost;
    this.cheapestDaysForDelivery = cheapestDaysForDelivery;
    this.fastestOperator = fastestOperator;
    this.fastestTotalCost = fastestTotalCost;
    this.fastestDaysForDelivery = fastestDaysForDelivery;
  }
}
