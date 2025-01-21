const currentCurrency = ref(null);
const rates = ref(null);

export const useCurrency = () => {
  const setExchangeRates = (exchangeRates) => {
    rates.value = exchangeRates;
  };

  const setCurrency = (currency) => {
    currentCurrency.value = currency;
  };

  const convertPrice = (price, fromCurrency) => {
    if (!rates.value || !price) {
      console.error("No exchange rates or price provided");
      return price;
    }

    const rateObj = rates.value.find((rate) => rate.base === fromCurrency);
    const rate = rateObj.rates[currentCurrency.value];

    return price * rate;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: currentCurrency.value,
      currencyDisplay: "narrowSymbol",
    }).format(price);
  };

  return {
    currentCurrency: computed(() => currentCurrency.value),
    setExchangeRates,
    setCurrency,
    convertPrice,
    formatPrice,
  };
};
