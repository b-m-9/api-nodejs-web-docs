const configApp = require('./config.js');

module.exports = {

  head: {
    title: 'api-docs',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '~/static/css/uikit.min.css',
    '~/static/css/accordion.min.css',
    '~/static/css/fonts.css',
    '~/static/css/template.css',
    '~/static/css/media.css',

  ],
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/moment',
    // ['nuxt-sass-resources-loader',
    //     './assets/sass/style.scss'
    // ]
  ],
  plugins: [
    {src: '~/plugins/rest-api'}
  ],
  env: {
    configApp,
  },
  loading: {color: '#2323f1'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

