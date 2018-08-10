const {Nuxt, Builder, Generator} = require('nuxt');
const express = require('express');
const fs = require('fs');


module.exports = (config_file, waitPromise) => {
  let cfs = JSON.stringify(config_file);
  cfs = 'module.exports = ' + cfs + ';';

  // create dir
  if (!fs.existsSync(process.cwd() + '/api_docs'))
    fs.mkdirSync(process.cwd() + '/api_docs');
  fs.writeFileSync(__dirname + '/config.js', cfs);

  let config = require('./nuxt.config.js');
  config.dev = false;
  const nuxt = new Nuxt(config);
  const builder = new Builder(nuxt);
  const generator = new Generator(nuxt, builder);

  generator
    .generate({init: true, build: true}).then(() => {
    console.log('ready');
  });
  return generator
};
