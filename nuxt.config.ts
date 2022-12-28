// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          ["defineStore", "definePiniaStore"]
        ]
      }
    ]
  ]
})
