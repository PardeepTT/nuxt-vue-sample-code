// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // Below for global metadata setup
  app: {
    head: {
      title: "n-dojo",
      meta: [
        {
          name: "description", content: "Some good Stuff in Vue and Nuxt"
        }
      ],
      link: [
        {
          rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" 
        }
      ]
    }
  }
})