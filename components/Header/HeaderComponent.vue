<template>
  <div class="header">
    <div class="container">
      <LogoComponent />
    </div>
  </div>
</template>

<style scoped>
.header {
  height: var(--cm-header-height);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  background-color: var(--cm-color-primary-white);
}

.header--logo {
  margin-bottom: 0;
}
</style>
