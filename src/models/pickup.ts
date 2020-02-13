import {Package} from './package';

export interface Pickup {
  currencyCode: number;
  suggestVatRate: number;
  pickupCompanyName?: string;
  pickupCompanyEori?: string;
  pickupCompanyVat?: string;
  pickupContactFirstname?: string;
  pickupContactLastname?: string;
  pickupEmail?: string;
  pickupPhone?: string;
  pickupStreet: string;
  pickupStreetMore: string;
  pickupPostcode: string;
  pickupRegion: string;
  pickupCity: string;
  pickupCountryIso2: string;
  pickupCountry: string;
  metric: number;
  packingType: string;
  hasPersonalInsurance: boolean;
  deliveryMethod: string;
  iframePriceLabel?: string;
  iframePriceModify?: string;
  description?: string;
  commercialValue?: string;
  packages: Package[];
}
