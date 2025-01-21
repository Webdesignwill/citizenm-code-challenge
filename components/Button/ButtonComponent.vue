<template>
  <button class="button primary" type="button" aria-label="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  transition: background-color 0.3s;
  background: none;
  display: flex;
  align-items: center;
  border-radius: var(--cm-border-radius);
  justify-content: center;
  gap: var(--cm-spacing-base-4);
  border: none;
  white-space: nowrap;
  padding: var(--cm-spacing-base-3) 0;
}

.button.primary {
  background-color: var(--cm-color-primary-red);
  color: var(--cm-color-primary-white);
}

.button.primary:hover:not(.disabled),
.button.primary:focus:not(.disabled) {
  background-color: var(--cm-color-red-hover);
}
</style>
