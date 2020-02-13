export interface CalculateResponse {
  tokenkey: string;
  currency: string;
  totalHT: number;
  forex: {
    total: number;
    vat: number;
    currency: string;
    currencyCode: number;
    currencySymbol: string;
    forexSign: string;
    rate: number;
  };
  isIntraEurope: boolean;
  hash: string;
  services: Array<any>;
  clearanceRate: number;
  places: {
    from: {
      info: string;
      iso2: string;
      city: string;
      country: string;
      text: string;
    };
  };
  totalDue: number;
  totalDueComment: string;
}
