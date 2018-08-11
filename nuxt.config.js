module.exports = {
  // rootDir: process.cwd() + '/api_docs/',
  // modulesDir: process.cwd() + '/node_modules/',
  srcDir: __dirname,
  router:{
    mode:'hash',
    base:'/api-nodejs-docs/'
  },
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
    '~/static/css/fa5.css',
    '~/static/css/template.css',
    '~/static/css/media.css',

  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/moment',
  ],
  plugins: [
    '~/plugins/rest-api.js'
  ],
  loading: {color: '#2323f1'},
  build: {
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
};
