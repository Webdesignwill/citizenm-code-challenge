<template>
  <div class="card">
    <div class="card--tag">available</div>

    <picture class="card--picture">
      <img class="card--image" :src="hotelInfo.image" :alt="hotelInfo.name" />
    </picture>

    <div class="card--inner">
      <h6 class="card--title">{{ hotelInfo.name }}</h6>
      <small class="card--description">all hotels are available</small>

      <div class="card--price-section">
        <small class="card--price-description">rooms available from</small>
        <ClientOnly>
          <div class="card--price-wrapper">
            <div class="card--price-container">
              <Transition name="price" mode="out-in">
                <p :key="formattedPrice" class="card--price-amount">
                  {{ formattedPrice }}
                </p>
              </Transition>
            </div>
          </div>
        </ClientOnly>
      </div>

      <ButtonComponent> view rates </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
const { convertPrice, formatPrice } = useCurrency();

const props = defineProps({
  hotelInfo: {
    type: Object,
    required: true,
  },
  details: {
    type: Object,
    required: true,
  },
});

const formattedPrice = computed(() => {
  const convertedPrice = convertPrice(
    props.details.price,
    props.hotelInfo.locale.currency
  );

  return formatPrice(convertedPrice);
});
</script>

<style scoped lang="scss">
.card {
  background-color: var(--cm-color-primary-white);
  position: relative;
  overflow: hidden;
  border-top-right-radius: var(--cm-border-radius);
  border-top-left-radius: var(--cm-border-radius);
  display: flex;
  flex-direction: column;
}

.card--tag {
  position: absolute;
  background-color: var(--cm-color-green);
  color: var(--cm-color-primary-white);
  padding: var(--cm-spacing-base-1) var(--cm-spacing-base-3);
  top: var(--cm-spacing-base-3);
  left: var(--cm-spacing-base-3);
  border-radius: var(--cm-border-radius);
}

.card--picture {
  aspect-ratio: 16 / 9;
}

.card--image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card--inner {
  border-bottom-left-radius: var(--cm-border-radius);
  border-bottom-right-radius: var(--cm-border-radius);
  border: 1px solid var(--cm-color-border);
  border-top: none;
  display: flex;
  flex-direction: column;
  padding: var(--cm-spacing-base-3);
  flex-grow: 1;
  gap: var(--cm-spacing-base-3);
}

.card--price-description,
.card--title,
.card--description,
.card--price-amount {
  margin: 0;
}

.card--title {
  font-size: var(--cm-font-size-u7);
}

.card--description {
  flex-grow: 1;
}

.card--price-section {
  display: flex;
  justify-content: space-between;
  border-radius: var(--cm-border-radius);
  align-items: center;
  background-color: var(--cm-color-light-grey-surface);
  padding: var(--cm-spacing-base-3);
  gap: var(--cm-spacing-base-3);
  overflow: hidden;
}

.card--price-container {
  position: relative;
}

.card--price-wrapper {
  position: relative;
}

.price-enter-active,
.price-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.price-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.price-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.price-enter-to,
.price-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
