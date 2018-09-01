<template>
  <div class="uk-accordion-content uk-active" style="background:#fff">
    <ul class="method-switch">
      <li :aria-expanded="(tab===1)" :class="{'uk-active':tab===1}">
        <a @click="tab =1">Request info</a>
      </li>
      <li :aria-expanded="(tab===2)" :class="{'uk-active':tab===2}">
        <a @click="tab =2">Response</a>
      </li>
      <li :aria-expanded="(tab===3)" :class="{'uk-active':tab===3}">
        <a @click="tab =3">Testing method</a>
      </li>
      <li :aria-expanded="(tab===4)" :class="{'uk-active':tab===4}">
        <a @click="tab =4">Source code</a>
      </li>
    </ul>
    <ul class="uk-switcher uk-clearfix">
      <!--<tab1 :method="method" :tab="tab"/>-->
      <tab2 :method="method" :tab="tab"/>
      <tab3 :method="method" :tab="tab"/>
      <tab4 :method="method" :tab="tab"/>
    </ul>
  </div>
</template>

<script>
  import tab1 from '~/components/MethodElements/tab1.vue'
  import tab2 from '~/components/MethodElements/tab2.vue'
  import tab3 from '~/components/MethodElements/tab3.vue'
  import tab4 from '~/components/MethodElements/tab4.vue'

  export default {
    components: {
      tab1,
      tab2,
      tab3,
      tab4
    },
    props: {
      method: {type: Object, required: true}
    },
    data() {
      return {tab: 1}
    }
  }
</script>
