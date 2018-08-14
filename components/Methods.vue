<template>
  <div class="result-metod-block uk-margin-top">
    <div class="uk-accordion" v-for="(el) in docs" :key="el.method">
      <h3 class="uk-accordion-title" @click="openMethod(el.method)"
          :class="{'uk-active':(open.indexOf(el.method) !== -1)}">
        <method-element-title :method="el"/>
      </h3>
      <div class="content-method_info" :class="{close:(open.indexOf(el.method) === -1)}">
        <method-element-content :method="el"/>
      </div>
    </div>
  </div>
</template>


<script>
  import MethodElementTitle from '~/components/MethodElements/title.vue'
  import MethodElementContent from '~/components/MethodElements/content.vue'

  export default {
    props: {
      docs: {type: Array, required: true}
    },
    data() {
      return {
        step: 1,
        open: []
      }
    },
    components: {
      MethodElementContent,
      MethodElementTitle
    },
    methods: {
      openMethod(name) {
        let index = this.open.indexOf(name);
        if (index === -1)
          return this.open.push(name);

        this.open.splice(index,1);

      }
    },

  }
</script>
<style scoped>


  .content-method_info {
    height: auto;
    max-height: 10000px;
    transition: max-height 0.3s ease-in;
    position: relative;
    overflow: hidden;

  }

  .content-method_info.close {
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }
</style>
