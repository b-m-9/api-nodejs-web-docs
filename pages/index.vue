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
  import HeaderNavigate from '~/components/_utils/headerNavigate.vue'
  import FooterBlock from '~/components/_utils/footerBlock.vue'
  import HelloBlock from '~/components/HelloBlock.vue'
  import Statistic from '~/components/Statistic.vue'
  import FilterBlock from '~/components/filter.vue'
  import Methods from '~/components/Methods.vue'
  import InfoAndModules from '~/components/InfoAndModules.vue'

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
    data() {
      console.log('getdata','');
      console.log('getdata',this.$config.projectName);

      return {
        docs: [],
        stat: {
          commitHash: "00000",
          countQueries: "0",
          count_method: 0,
          latency_ms: "0",
          project_name: "API",
          version: "0.0.0"
        },
        projectName: this.$config.projectName
      }
    },
    mounted() {
      console.log('mounted','');

      return this.$rest.api('config/docs/api', {}).then(res => {
        console.log('config/docs/api',res.data);

        // console.log(res.data.methods)
        this.docs = res.data.methods;
        this.stat = res.data.config;
        this.stat.count_method = res.data.methods.length;
      })
    }
  }
</script>
