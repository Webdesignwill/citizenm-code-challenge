import rates from "./exchange-rate.json";

export default defineEventHandler(async () => {
  return {
    rates,
    success: true,
  };
});
