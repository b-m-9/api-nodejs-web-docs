<template>
  <div class="block2">
    <div class="uk-container uk-container-center uk-text-center">
      <div class="second-menu">
        <ul class="list-menu">
          <li :class="{'uk-active':step===1}">
            <a style="cursor: pointer" @click="setStep(1)">
              <img src="~/static/images/icon_menu_01.png" alt="" width="16" height="16">HTTP/2
            </a>
          </li>
          <li :class="{'uk-active':step===2}">
            <a style="cursor: pointer" @click="setStep(2)">
              <img src="~/static/images/icon_menu_02.png" alt="" width="18" height="17">WebSocket
            </a>
          </li>
          <li :class="{'uk-active':step===3}" @click="setStep(3)">
            <a style="cursor: pointer">
              <img src="~/static/images/icon_menu_03.png" alt="" width="18" height="17">About API
            </a>
          </li>
        </ul>
      </div>
      <ul class="uk-switcher uk-margin-large-top uk-margin-bottom" id="api-switch">
        <step1 v-if="step===1"/>
        <step2 v-if="step===2"/>
        <step3 v-if="step===3"/>
      </ul>
    </div>
    <a class="link-bottom" style="cursor: pointer"><i class="uk-icon-angle-down"></i></a>
  </div>

</template>


<script>
  import step1 from '~/components/InfoAndModulesSteps/step1.vue'
  import step2 from '~/components/InfoAndModulesSteps/step2.vue'
  import step3 from '~/components/InfoAndModulesSteps/step3.vue'

  export default {
    components: {
      step1,
      step2,
      step3
    },
    data() {
      return {
        step: 1
      }
    },
    methods: {
      setStep(step) {
        console.log('setStep',step);
        this.step = step;
      }
    }
  }
</script>
