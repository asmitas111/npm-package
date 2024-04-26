import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_gaHOwNX2Z2PkYQlqLnOKKxXpH8Brjs9xp7FBykaM');

convertCurrency("EUR", "USD", 30)
async function convertCurrency(fromCurrency, toCurrency, units) {
 const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });
  const multipier = response.data[toCurrency];
  console.log(multipier);
}
