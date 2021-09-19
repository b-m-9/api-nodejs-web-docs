<template>
  <div v-fragment>
    <template v-for="(el,param_name) in param">
      <params_1 :key="'param_test_'+param_name"
                :param="el"
                :root_param_name="getPath(root_param_name,param_name)"
                v-if="(typeof el ==='object') && (!el.type || !el.type.name)" />
      <tr :key="'param_test_'+param_name" v-else>

        <td>{{ getPath(root_param_name, param_name) }} <i class="fal fa-copy"
                                                          v-clipboard:copy="getPath(root_param_name,param_name)"
                                                          v-clipboard:success="onCopy"></i></td>
        <td>{{ el.title }}</td>
        <td v-if="el && typeof el ==='object'">{{ el.type.name }}</td>
        <td v-else>Error Type</td>
        <td>{{ el.required ? 'YES' : 'NO' }}</td>
        <td>{{ el.error_code }}</td>
      </tr>
    </template>
  </div>
</template>

<script>
import params_1 from '~/components/MethodElements/params_1.vue'

export default {
  name: "params_1",
  props: {
    param: {required: true},
    root_param_name: {type: String, default: ''},
  },
  components: {params_1},
  methods: {
    getPath(rootName, key, indexarray) {
      if (indexarray && rootName !== '' && key && key !== '') return rootName + '[' + indexarray + ']' + '[' + key + ']';
      if (indexarray && rootName !== '') return rootName + '[' + indexarray + ']';
      if (rootName !== '') return rootName + '[' + key + ']';
      return key
    },
    onCopy() {
      console.log('copy')
    }
  },
}
</script>
