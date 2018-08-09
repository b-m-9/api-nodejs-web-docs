<template>
  <div>
    <div class="block1">
      <div class="uk-container uk-container-center">
        <header-navigate/>

        <hello-block/>
      </div>
      <a class="link-bottom" href="">
        <i class="uk-icon-angle-down"></i>
      </a>
    </div>

    <info-and-modules/>
    <statistic/>


    <footer-block/>
  </div>
</template>

<script>
  import headerNavigate from '~/components/_utils/headerNavigate.vue'
  import footerBlock from '~/components/_utils/footerBlock.vue'
  import HelloBlock from '~/components/HelloBlock.vue'
  import Statistic from '~/components/Statistic.vue'
  import InfoAndModules from '~/components/InfoAndModules.vue'

  export default {
    components: {

      headerNavigate,
      HelloBlock,
      InfoAndModules,
      Statistic,
      footerBlock
    },
    data() {
      return {
        projectName: this.$config.projectName
      }
    }
  }
</script>
