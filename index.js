const {Nuxt, Builder} = require('nuxt');
const express = require('express');
const fs = require('fs');
const router = express.Router();

module.exports = (config_file, waitPromise) => {
  let cfs = JSON.stringify(config_file);
  cfs = 'module.exports = ' + cfs + ';';
  fs.writeFileSync(__dirname + '/config.js', cfs);
  let config = require('./nuxt.config.js');
  config.dev = false;

  const nuxt = new Nuxt(config);
  if(!waitPromise) waitPromise = Promise.resolve();
  waitPromise.then(() => {
    console.log('Start build docs');
    new Builder(nuxt).build().then(console.log).catch(console.error)
  });

  router.use(nuxt.render);
  return router;
};
