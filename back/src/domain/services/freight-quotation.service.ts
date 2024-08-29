import { FreightQuotation } from '../entities/freight-quotation.entity';
import { FreightQuotationRepository } from '../repositories/freight-quotation.repository';
import { CreateFreightQuotationDto } from './dtos/freight-quotation.dto';
import { FreightOperatorService } from './freight-operator.service';
import { GeocodingService } from './geocoding.service';
import { ShopkeeperService } from './shopkeeper.service';

export class FreightQuotationService {
  constructor(
    private FreightQuotationRepo: FreightQuotationRepository,
    private shopkeeperService: ShopkeeperService,
    private freightOperatorService: FreightOperatorService,
    private geocodingService: GeocodingService,
  ) {}

  async create(methodDto: CreateFreightQuotationDto): Promise<FreightQuotation> {
    const shopkeeper = await this.shopkeeperService.findById({
      id: methodDto.shopkeeperId,
    });

    if (!shopkeeper) {
      throw new Error('Shopkeeper not found');
    }

    const addresses = {
      from: methodDto.collectionAddress,
      to: methodDto.deliveryAddress,
    };

    const distanceKM =
      await this.geocodingService.getDistanceByAddresses(addresses);

    if (!distanceKM) {
      throw new Error('Cannot calculate distance between addresses');
    }

    const cubicWeight =
      methodDto.heightCM * methodDto.widthCM * methodDto.lengthCM;

    const {
      operator: cheapestOperator,
      totalCost: cheapestTotalCost,
      daysToDeliver: cheapestDaysToDelivery,
    } = await this.freightOperatorService.getCheapest({
      distanceKM,
      cubicWeight,
    });

    if (!cheapestOperator) {
      throw new Error('No cheapest freight operator found');
    }

    if (!cheapestTotalCost) {
      throw new Error('Cannot calculate total cost for cheapest operator');
    }

    if (!cheapestDaysToDelivery) {
      throw new Error('Cannot calculate days to deliver for cheapest operator');
    }

    const {
      operator: fastestOperator,
      totalCost: fastestTotalCost,
      daysToDeliver: fastestDaysToDelivery,
    } = await this.freightOperatorService.getFastest({
      distanceKM,
      cubicWeight,
    });

    const FreightQuotation = {
      fastestOperator: fastestOperator,
      fastestDaysForDelivery: fastestDaysToDelivery,
      fastestTotalCost: fastestTotalCost,
      cheapestOperator: cheapestOperator,
      cheapestDaysForDelivery: cheapestDaysToDelivery,
      cheapestTotalCost: cheapestTotalCost,
      shopkeeper: shopkeeper,
      heightCM: methodDto.heightCM,
      widthCM: methodDto.widthCM,
      lengthCM: methodDto.lengthCM,
      distanceKM,
      cubicWeight,
      deliveryAddress: methodDto.deliveryAddress,
      collectionAddress: methodDto.collectionAddress,
    };

    return await this.FreightQuotationRepo.create(FreightQuotation);
  }
}
