<template>
  <main role="main">
    <h4 class="container">{{ hotelData.amount }} available hotels in Europe</h4>
    <CurrencySwitchComponent />

    <div class="container">
      <div class="hotel-grid">
        <template v-for="hotel in hotelData.hotels" :key="hotel.name">
          <CardComponent
            v-for="offer in hotel.offers"
            :key="`${hotel.name}-${offer.name}`"
            :hotelInfo="hotel"
            :details="offer"
          />
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
const { data } = await useFetch("/api/offers", {
  key: "offers",
});

const hotelData = computed(() => ({
  hotels: data.value?.offers,
  amount: data.value?.totalHotels,
}));
</script>

<style scoped lang="scss">
@use "@/base/breakpoints.scss" as *;

.hotel-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--cm-spacing-base-4);
  margin-bottom: var(--cm-spacing-4);

  @media (min-width: breakpoint(mobileMedium)) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: breakpoint(tablet)) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: breakpoint(desktop)) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
