<template>
  <li :aria-hidden="!(tab===4)" :class="{'uk-active':tab===4}">
    <p class="title-method">Source code validate param:</p>
    <ul class="uk-list uk-list-striped list-code" v-if="method.param && Object.keys(method.param).length > 0">
      <pre v-for="(el,method_name) in method.param" :key="'param_source_'+method_name">
        /**
        @name {{method_name}}
        @type {{(el && el.type && el.type.name) ? el.type.name : Array.isArray(el) ? 'Array' : (typeof el === 'object')
        ? 'Object' : ''}}
        @error {{el.error_code}}
        <span v-if="el && el.type && el.type.max">@var max={{el.type.max}}</span>
        <span v-if="el && el.type && el.type.fixed">@var fixed={{el.type.fixed}}</span>
        <span v-if="el && el.type && el.type.regexp">@regexp {{el.type.regexp}}</span>
        */
        {{(el && el.type && el.type.validator) ? el.type.validator : ''}}
        // =====================================
      </pre>
    </ul>
    <p class="title-method">Source code of the method:</p>
    <ul class="uk-list uk-list-striped list-code">
      <pre>{{method.code}}</pre>
    </ul>
  </li>

</template>

<script>
  export default {
    props: {
      method: {type: Object, required: true},
      tab: {type: Number, required: true},
    }
  }
</script>
