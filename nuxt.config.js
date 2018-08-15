module.exports = {
  srcDir: __dirname,
  mode: 'spa',
  router: {
    base : '/',
    mode: 'hash'
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
    '~/node_modules/vue-json-viewer/examples/css/ionicons.min.css',

  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/moment',
  ],
  plugins: [
    '~/plugins/rest-api.js',
    '~/plugins/vue-clipboard.js',
    '~/plugins/vue-json-tree-view.js'
  ],
  loading: {color: '#2323f1'},
  build: {
    // publicPath: 'nuxt/',
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
