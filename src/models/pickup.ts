import {Package} from './package';

export interface Pickup {
  currencyCode: string;
  suggestVatRate: string;
  pickupCompanyName: string;
  pickupCompanyEori: string;
  pickupCompanyVat: string;
  pickupContactFirstname: string;
  pickupContactLastname: string;
  pickupEmail: string;
  pickupPhone: string;
  pickupStreet: string;
  pickupStreetMore: string;
  pickupPostcode: string;
  pickupRegion: string;
  pickupCity: string;
  pickupCountryIso2: string;
  pickupCountry: string;
  metric: string;
  packingType: string;
  hasPersonalInsurance: string;
  deliveryMethod: string;
  iframePriceLabel: string;
  iframePriceModify: string;
  description: string;
  commercialValue: string;
  packages: Package[];
}