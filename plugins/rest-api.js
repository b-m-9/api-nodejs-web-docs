import Vue from 'vue'
import axios from 'axios'

const config = process.env.config;

const Rest = {
  install(Vue, options) {
    Vue.prototype.$rest = this;
    Vue.prototype.$config = config;

  },
  api(method, param) {
    return axios.post(config.API_URL + method + '/', param)
      .catch(err => {
        console.error('API Error->', err);
        return Promise.reject(err)
      })
  },
  baseUrl: config.baseUrl,
  apiPath: config.API_URL,
};

export default ({app}) => {
  app.$rest = Rest;
  app.$config = config;
}

Vue.use(Rest);
