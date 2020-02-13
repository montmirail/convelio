import { Pickup } from '../models/pickup';
import { Delivery } from '../models/delivery';
import { IBilling } from '../models/billing';

export interface PriceRequestDto {
  pickup: Pickup;
  deliveryProfile: Delivery;
  billing: IBilling;
}
