<template>
  <div>
    <div class="block1">
      <div class="uk-container uk-container-center">
        <header-navigate/>

        <hello-block/>
      </div>
      <a class="link-bottom" style="cursor: pointer">
        <i class="uk-icon-angle-down"></i>
      </a>
    </div>


    <info-and-modules/>
    <statistic :stat="stat"/>

    <div class="block4">
      <div class="block4-top"></div>
      <filter-block/>

      <div class="uk-container uk-container-center" style="padding-top: 0;">
        <methods :docs="docs"/>
      </div>
    </div>
    <footer-block/>
  </div>
</template>

<script>
  import axios from 'axios'
  import HeaderNavigate from '~/components/_utils/headerNavigate.vue'
  import FooterBlock from '~/components/_utils/footerBlock.vue'
  import HelloBlock from '~/components/HelloBlock.vue'
  import Statistic from '~/components/Statistic.vue'
  import FilterBlock from '~/components/filter.vue'
  import Methods from '~/components/Methods.vue'
  import InfoAndModules from '~/components/InfoAndModules.vue'

  const $config = require('../config');
  export default {
    components: {
      HeaderNavigate,
      HelloBlock,
      InfoAndModules,
      Statistic,
      FilterBlock,
      Methods,
      FooterBlock
    },
    asyncData() {
      return axios.post($config.API_URL + 'config/docs/api').then(res => {
        console.log(res);
        res.data.config.count_method = res.data.methods.length;
        return {
          docs: res.data.methods,
          stat: res.data.config,
          projectName: $config.projectName
        };
      });
    }
  }
</script>
