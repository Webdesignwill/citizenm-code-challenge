<template>
  <div class="layout">
    <HeaderComponent />
    <NuxtPage />
    <FooterComponent />
  </div>
</template>

<style scoped>
.layout {
  padding-top: calc(var(--cm-header-height) + var(--cm-spacing-base-5));
}
</style>
