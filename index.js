const {Nuxt, Builder, Generator} = require('nuxt');
const fs = require('fs');


module.exports = (config_file) => {

  let cfs = JSON.stringify(config_file);
  cfs = 'module.exports = ' + cfs + ';';

  if (!fs.existsSync(process.cwd() + '/api_docs'))
    fs.mkdirSync(process.cwd() + '/api_docs');

  fs.writeFileSync(__dirname + '/config.js', cfs);


  let config = require('./nuxt.config.js');
  config.rootDir = process.cwd() + '/api_docs/';
  config.modulesDir = process.cwd() + '/node_modules/';
  config.router.base = './';
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
