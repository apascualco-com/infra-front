export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'infra-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/main.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build',],
  modules: [],
  build: {
  }
}
