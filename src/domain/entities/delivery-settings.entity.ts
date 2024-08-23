interface DeliverySettingsInterface {
  id?: string;
  initialDistance: number;
  finalDistance: number;
  multipleofDistance: number;
  daysToDeliver: number;
}

export class DeliverySettings {
  id: string;
  initialDistance: number;
  finalDistance: number;
  multipleofDistance: number;
  daysToDeliver: number;

  constructor({
    id,
    initialDistance,
    finalDistance,
    multipleofDistance,
    daysToDeliver,
  }: DeliverySettingsInterface) {
    this.id = id;
    this.initialDistance = initialDistance;
    this.finalDistance = finalDistance;
    this.multipleofDistance = multipleofDistance;
    this.daysToDeliver = daysToDeliver;
  }
}
