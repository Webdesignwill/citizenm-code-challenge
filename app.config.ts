export default defineAppConfig({
  availableCurrencies: ["EUR", "GBP", "DKK", "USD", "JPY"],
  localeCurrencyMap: {
    "en-US": "USD",
    "en-GB": "GBP",
    da: "DKK",
    "da-DK": "DKK",
    ja: "JPY",
    "ja-JP": "JPY",
    default: "EUR",
  },
});
