<template>
  <div>
    <tr v-for="(el,param_name) in method.param" :key="'param_i_'+param_name">
      <td>{{param_name}} <i class="fal fa-copy"
                            v-clipboard:copy="param_name"
                            v-clipboard:success="onCopy"></i></td>
      <td>{{el.title}}</td>
      <td v-if="el && typeof el ==='object'">{{Array.isArray(el)? "ARRAY("+el[0].type.name+")": el.type.name}}</td>
      <td v-else>Error Type</td>
      <td>{{el.required ? 'YES': 'NO'}}</td>
      <td>{{el.error_code}}</td>
    </tr>
  </div>
</template>

<script>
  import params_1 from '~/components/MethodElements/params_1.vue'

  export default {
    props: {
      param: {required: true},
      root_param_name: {type: String, default: ''},
    },
    methods: {
      getPath(rootName, key, indexarray) {
        if (indexarray && rootName !== '' && key && key !== '') return rootName + '[' + indexarray + ']' + '[' + key + ']';
        if (indexarray && rootName !== '') return rootName + '[' + indexarray + ']';
        if (rootName !== '') return rootName + '[' + key + ']';
        return key
      }
    },


    name: 'params_1',
    components: {params_1},
  }
</script>
