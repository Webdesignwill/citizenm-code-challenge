import offers from "./offers.json";

export default defineEventHandler(async () => {
  return {
    offers,
    totalHotels: offers.length,
    success: true,
  };
});
