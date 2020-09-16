// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Home',
    titleTemplate: '%s | The Project of Projects',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "An eternal work in progress of things I want to work on, things I am currently working on, things I have forgotten to work on, and things I have finished working on. Aka, Evan's portfolio.",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
    script: [
      {
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
        type: 'text/javascript',
      },
    ],
    bodyAttrs: {
      class: 'has-navbar-fixed-top',
    },
  },
  /*
   ** Global CSS
   */
  loading: {
    color: '#EA7638',
    height: '4px',
  },
  css: ['@/assets/sass/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/buefy.js', '@/plugins/fontawesome.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],
  styleResources: {
    scss: ['@/assets/sass/main.scss'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary',
    'nuxt-fontawesome',
    'cookie-universal-nuxt',
  ],
  fontawesome: {
    component: 'font-awesome-icon',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  cloudinary: {
    // Cloudinary configuration options
    cloudName: 'dqywsmiax',
  },
  build: {},
}
