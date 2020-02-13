import { Convelio } from '../convelio';

test('Calculate', async done => {
  const convelio = new Convelio('dev_818560729fe93f2079332523b247e604081ed4e7232be8a3e6df193836f298c0');

  await convelio
    .calculate({
      deliveryProfile: {
        deliveryStreet: "Avenue d'Ouchy 4",
        deliveryPostcode: '1006',
        deliveryCity: 'Lausanne',
        deliveryCountryIso2: 'CH',
        deliveryCountry: 'switzerland',
      },
      pickup: {
        currencyCode: 978,
        suggestVatRate: 7.7,
        pickupStreet: 'Rue du Faubourg Saint-Honoré',
        pickupStreetMore: '',
        pickupPostcode: '75008',
        pickupCity: 'Paris',
        pickupCountryIso2: 'FR',
        pickupRegion: 'Île-de-France',
        pickupCountry: 'France',
        metric: 0,
        packingType: 'notpacked',
        hasPersonalInsurance: false,
        deliveryMethod: 'curbside',
        packages: [
          {
            width: 2,
            height: 50,
            length: 50,
            weight: 10,
            quantity: 1,
          },
        ],
      },
      billing: {
        billingStreet: "avenue d'ouchy 4",
        billingPostcode: '1006',
        billingCity: 'lausanne',
      },
    })
    .then(res => {
      console.log(res);
      done();
    })
    .catch((err: Error) => {
      expect(err.message).toBe(null);
    });
});
