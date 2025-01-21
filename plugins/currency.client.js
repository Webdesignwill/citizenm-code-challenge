import { useCurrency } from "~/composables/useCurrency";

export default defineNuxtPlugin(async (nuxtApp) => {
  const appConfig = useAppConfig();
  const { setExchangeRates, setCurrency } = useCurrency();

  const { data: exchangeRateResponse } = await useFetch("/api/exchange", {
    key: "rates",
  });

  setExchangeRates(exchangeRateResponse.value.rates);
  const browserLocale = navigator.language;
  const availableCurrencies = appConfig.availableCurrencies;
  const localeCurrencyMap = appConfig.localeCurrencyMap;
  const initialCurrency = localeCurrencyMap[browserLocale];

  setCurrency(initialCurrency);

  nuxtApp.provide("currency", {
    availableCurrencies,
    initialCurrency,
  });
});
