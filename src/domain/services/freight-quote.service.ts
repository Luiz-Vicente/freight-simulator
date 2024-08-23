import { FreightQuote } from '../entities/freight-quote.entity';
import { FreightQuoteRepository } from '../repositories/freight-quote.repository';
import { CreateFreightQuoteDto } from './dtos/create-freight-quote.dto';
import { FreightOperatorService } from './freight-operator.service';
import { ShopkeeperService } from './shopkeeper.service';

export class FreightQuoteService {
  constructor(
    private freightQuoteRepo: FreightQuoteRepository,
    private shopkeeperService: ShopkeeperService,
    private freightOperatorService: FreightOperatorService,
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

    const distanceKM = 100;

    const cubicWeight =
      createFreightQuoteDto.heightCM *
      createFreightQuoteDto.widthCM *
      createFreightQuoteDto.lengthCM;

    const {
      operator: cheapestOperator,
      totalCost: fastestDaysToDelivery,
      daysToDeliver: fastestTotalCost,
    } = await this.freightOperatorService.getMoreCheapOperator({
      distanceKM,
      cubicWeight,
    });

    if (!cheapestOperator) {
      throw new Error('No cheapest freight operator found');
    }

    const {
      operator: fastestOperator,
      totalCost: cheapestTotalCost,
      daysToDeliver: cheapestDaysToDelivery,
    } = await this.freightOperatorService.getMoreFastOperator({
      distanceKM,
      cubicWeight,
    });

    const data = {
      moreFastOperator: fastestOperator,
      moreFastDaysToDelivery: fastestDaysToDelivery,
      moreFastTotalCost: cheapestTotalCost,
      moreCheapOperator: cheapestOperator,
      moreCheapDaysToDelivery: cheapestDaysToDelivery,
      moreCheapTotalCost: fastestTotalCost,
      shopkeeper: shopkeeper,
      heightCM: createFreightQuoteDto.heightCM,
      widthCM: createFreightQuoteDto.widthCM,
      lengthCM: createFreightQuoteDto.lengthCM,
      distanceKM,
      cubicWeight,
      deliveryAddress: createFreightQuoteDto.deliveryAddress,
      collectionAddress: createFreightQuoteDto.collectionAddress,
    };

    console.log('chegou aqui');
    const resp = await this.freightQuoteRepo.create(data);

    return resp;
  }
}
