const {Nuxt, Builder, Generator} = require('nuxt');
const express = require('express');
const fs = require('fs');


module.exports = (config_file) => {
  const router = express.Router();

  let cfs = JSON.stringify(config_file);
  cfs = 'module.exports = ' + cfs + ';';

  let config = require('./nuxt.config.js');
  config.dev = false;
  if (config_file.api_docs_path)
    config.router.base = config_file.api_docs_path;

  const nuxt = new Nuxt(config);
  new Builder(nuxt).build().catch(console.error);

  router.use(nuxt.render);

  return router
};
