<template>
  <div class="currency-switch">
    <div class="container">
      <div class="currency-switch--label">
        Currency:
        <USelectMenu
          class="currency-switch--select"
          v-model="selectedCurrency"
          :options="availableCurrencies"
          @change="handleCurrencyChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const { setCurrency } = useCurrency();
const availableCurrencies = ref(null);
const selectedCurrency = ref(null);

const handleCurrencyChange = () => {
  setCurrency(selectedCurrency.value);
};

onMounted(() => {
  availableCurrencies.value = nuxtApp.$currency.availableCurrencies;
  selectedCurrency.value = nuxtApp.$currency.initialCurrency;
});
</script>

<style scoped lang="scss">
.currency-switch {
  z-index: 10;
  gap: var(--cm-spacing-base-2);
  padding: var(--cm-spacing-base-2) 0;
  margin-bottom: var(--cm-spacing-base-4);
  position: sticky;
  top: var(--cm-header-height);
  background-color: var(--cm-color-primary-white);
}

.currency-switch--label {
  position: relative;
  z-index: 1;
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--cm-spacing-base-4);
}

.currency-select {
  padding: var(--cm-spacing-base-2) var(--cm-spacing-base-4);
  border: 1px solid var(--cm-color-dark);
  border-radius: var(--cm-spacing-base-1);
  background-color: var(--cm-color-light);
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--cm-color-primary);
  }
}

:deep(.currency-switch--select button) {
  --tw-ring-color: var(--cm-color-border);
  background-color: var(--cm-color-primary-white);
  color: var(--cm-color-primary-dark);
  width: 150px;
  cursor: pointer;
}
</style>
