<template>
  <div>
    <div v-for="(el,param_name) in param" :key="'param_test_'+param_name">
      <params_3 :param="el"
                :root_param_name="getPath(root_param_name,param_name)"
                v-if="(typeof el ==='object') && (!el.type || !el.type.name)"/>


      <div class="key-value-form-row" v-else>
        <div class="key-value-form-actions">

          <input type="checkbox" :value='1' checked :disabled="el.required" :name="'$enable_field$'+getPath(root_param_name,param_name)"
                 onclick="this.value = (this.value ==='1')?'0':'1' "/>
        </div>
        <div class="auto-suggest-group">
          <div class="key-value-form-column" style="flex: 0 0 33%;"><span
            data-text="true">{{getPath(root_param_name,param_name)}}</span></div>
          <div class="key-value-form-column" style="flex: 0 0 33%;">

            <select class="key-value-form-input" :placeholder="el.type.name"
                    :name="getPath(root_param_name,param_name)"
                    v-if="el.type.name === 'BOOLEAN'">
              <option value="$undefined$" selected disabled>Select BOOLEAN</option>
              <option value="$true$">true</option>
              <option value="$false$">false</option>
            </select>
            <input class="key-value-form-input" :placeholder="el.type.name"
                   :name="getPath(root_param_name,param_name)"
                   v-else-if="el.type.name === 'INTEGER'" type="number" step="1">
            <input class="key-value-form-input" :placeholder="el.type.name"
                   :name="getPath(root_param_name,param_name)"
                   v-else-if="el.type.name === 'FLOAT'" type="number" step="0.01">
            <input class="key-value-form-input" :placeholder="el.type.name"
                   :name="getPath(root_param_name,param_name)"
                   v-else>

          </div>
          <div class="key-value-form-column" style="flex: 0 0 34%;">
            <span data-text="true">{{el.title}}</span>
          </div>
        </div>
        <div class="key-value-form-row__delete">
          <div class="key-value-form-row__delete__icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import params_3 from '~/components/MethodElements/params_3.vue'

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


    name: 'params_3',
    components: {params_3},
  }
</script>
