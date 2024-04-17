// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'STORE',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to OurStore - your one-stop shop for all your needs. Explore our wide range of products including electronics, fashion, home decor, and much more. Enjoy fast shipping and great deals on every purchase!'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: [
    '/public/css/main.css',
    '/public/css/variabls.css',
  ]
})
