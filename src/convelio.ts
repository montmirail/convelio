import axios, { AxiosResponse } from 'axios';
import { PriceRequestDto } from './dto/price-request.dto';
import { CalculateResponse } from './models/calculate-response';

export class Convelio {
  apiKey: string;
  host: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.host = 'https://web.convelio.com';
  }

  calculate(input: PriceRequestDto): Promise<CalculateResponse> {
    return this.sendRequest(this.calculatePriceUrl, input).then(({ data }) => {
      console.log(data);

      if (data.err !== 0) {
        throw new Error(data.err);
      }

      return data.data;
    });
  }

  placeShippingOrder(): Promise<any> {
    return this.sendRequest(this.placeOrderUrl, {});
  }

  private sendRequest(url: string, data: any): Promise<AxiosResponse<any>> {
    return axios.post(url, data, {
      headers: {
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  /**
   * API endpoint getter
   */
  private get calculatePriceUrl(): string {
    return `${this.host}/dock/v1/chajian/pre-quote/${this.apiKey}`;
  }

  private get placeOrderUrl(): string {
    return `${this.host}/dock/v1/chajian/place-order/${this.apiKey}`;
  }
}
