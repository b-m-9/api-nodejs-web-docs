const {Nuxt, Builder} = require('nuxt');
const express = require('express');
const fs = require('fs');
const router = express.Router();

module.exports = (config_file) => {

  let cfs = JSON.stringify(config_file);


  cfs = 'module.exports = ' + cfs + ';';
  fs.writeFileSync('./config.js', cfs);

  let config = require('./nuxt.config.js');
  config.dev = false;
  const nuxt = new Nuxt(config);
  new Builder(nuxt).build();
  router.use(nuxt.render);
  return router;
};

module.exports({
  baseUrl: "https://exchanger_001.proexchanger.net/",
  API_URL: "https://exchanger_001.proexchanger.net/service/api/v1/",
  projectName: 'API',
  hideDeveloper: false,
})
