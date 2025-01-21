import { resolve } from "path";

export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/assets/scss/"),
  },

  compatibilityDate: "2025-01-20",
  modules: ["@nuxt/ui"],
});
