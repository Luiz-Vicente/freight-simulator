import { FreightQuote } from '../entities/freight-quote.entity';
import { FreightQuoteRepository } from '../repositories/freight-quote.repository';
import { CreateFreightQuoteDto } from './dtos/create-freight-quote.dto';
import { FreightOperatorService } from './freight-operator.service';
import { GeocodingService } from './geocoding.service';
import { ShopkeeperService } from './shopkeeper.service';

export class FreightQuoteService {
  constructor(
    private freightQuoteRepo: FreightQuoteRepository,
    private shopkeeperService: ShopkeeperService,
    private freightOperatorService: FreightOperatorService,
    private geocodingService: GeocodingService,
  ) {}

  async create(
    createFreightQuoteDto: CreateFreightQuoteDto,
  ): Promise<FreightQuote> {
    const shopkeeper = await this.shopkeeperService.findById(
      createFreightQuoteDto.shopkeeperId,
    );

    if (!shopkeeper) {
      throw new Error('Shopkeeper not found');
    }

    const distanceKM = await this.geocodingService.calculateDistanceByAddresses(
      {
        from: createFreightQuoteDto.collectionAddress,
        to: createFreightQuoteDto.deliveryAddress,
      },
    );

    const cubicWeight =
      createFreightQuoteDto.heightCM *
      createFreightQuoteDto.widthCM *
      createFreightQuoteDto.lengthCM;

    const {
      operator: cheapestOperator,
      totalCost: cheapestDaysToDelivery,
      daysToDeliver: cheapestTotalCost,
    } = await this.freightOperatorService.getMoreCheapOperator({
      distanceKM,
      cubicWeight,
    });

    if (!cheapestOperator) {
      throw new Error('No cheapest freight operator found');
    }

    const {
      operator: fastestOperator,
      totalCost: fastestTotalCost,
      daysToDeliver: fastestDaysToDelivery,
    } = await this.freightOperatorService.getMoreFastOperator({
      distanceKM,
      cubicWeight,
    });

    const data = {
      moreFastOperator: fastestOperator,
      moreFastDaysToDelivery: fastestDaysToDelivery,
      moreFastTotalCost: fastestTotalCost,
      moreCheapOperator: cheapestOperator,
      moreCheapDaysToDelivery: cheapestDaysToDelivery,
      moreCheapTotalCost: cheapestTotalCost,
      shopkeeper: shopkeeper,
      heightCM: createFreightQuoteDto.heightCM,
      widthCM: createFreightQuoteDto.widthCM,
      lengthCM: createFreightQuoteDto.lengthCM,
      distanceKM,
      cubicWeight,
      deliveryAddress: createFreightQuoteDto.deliveryAddress,
      collectionAddress: createFreightQuoteDto.collectionAddress,
    };

    const resp = await this.freightQuoteRepo.create(data);

    return resp;
  }
}
