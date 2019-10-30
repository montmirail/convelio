import {Pickup} from '../models/pickup';
import {Delivery} from '../models/delivery';
import {Billing} from '../models/billing';

export interface PriceRequestDto {
  pickup: Pickup;
  deliveryProfile: Delivery;
  billing: Billing;
}