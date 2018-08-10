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
    <statistic/>

    <div class="block4">
      <div class="block4-top"></div>
      <filter-block/>

      <div class="uk-container uk-container-center">



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
  import InfoAndModules from '~/components/InfoAndModules.vue'

  export default {
    components: {
      HeaderNavigate,
      HelloBlock,
      InfoAndModules,
      Statistic,
      FilterBlock,
      FooterBlock
    },
    data() {
      return {
        projectName: this.$config.projectName
      }
    }
  }
</script>
