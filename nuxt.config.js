const Sass = require("sass");
const config = require('./config');

module.exports = {
  telemetry: false,
  srcDir: __dirname,
  ssr: false,
  target: "static",
  router: {
    base: '/',
    mode: 'hash'
  },
  head: {
    title: config.projectName + ' - API',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: config.iconBase64}
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
  ],
  plugins: [
    '~/plugins/vue-fragment.js',
    '~/plugins/rest-api.js',
    '~/plugins/vue-clipboard.js',
    '~/plugins/vue-json-tree-view.js'
  ],
  env: {config},
  loading: {color: '#2323f1'},
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        // fiber: Fiber
      }
    },
    extend(config, {isDev, isClient}) {
    }
  }
};
