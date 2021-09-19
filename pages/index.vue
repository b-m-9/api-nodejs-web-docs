<template>
  <div>
    <div class="block1">
      <div class="uk-container uk-container-center">
        <header-navigate />

        <hello-block />
      </div>
      <a class="link-bottom" style="cursor: pointer">
        <i class="uk-icon-angle-down"></i>
      </a>
    </div>


    <info-and-modules />
    <statistic :stat="stat" />

    <div class="block4">
      <div class="block4-top"></div>
      <filter-block @setGroup="setGroup" :methodLevel="type"/>

      <div class="uk-container uk-container-center" style="padding-top: 0;">
        <methods :docs="docs" />
      </div>
    </div>
    <footer-block />
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


    return {
      methodsArray: [],
      type: 1,
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
  computed: {
    docs() {
      console.log('this.type', this.type);
      return this.methodsArray
        .filter(el => {
          if (this.type === 1) {
            return true;

          }
          if (this.type === 2) { // public
            return el.level === 0;
          }
          if (this.type === 3) { // private
            return el.level >= 1;
          }
        })
    }
  },
  methods: {
    setGroup(id) {
      this.type = id;
    }
  },
  mounted() {
    return this.$rest.api('config/docs/api', {}).then(res => {
      this.methodsArray = res.data.methods;
      this.stat = res.data.config;
      this.stat.count_method = res.data.methods.length;
    })
  }
}
</script>
