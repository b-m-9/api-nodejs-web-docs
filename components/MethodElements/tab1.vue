<template>
  <li :aria-hidden="!(tab===1)" :class="{'uk-active':tab===1}">
    <div style="margin: 5px 90px;">
      <table cellspacing="0">
        <tbody>
        <tr>
          <th colspan="2">Information about the method.</th>
        </tr>
        <tr>
          <td>Method name:</td>
          <td>{{method.method}} <i class="fal fa-copy"></i></td>
        </tr>
        <tr>
          <td>Method URL:</td>
          <td><a :href="$config.API_URL+method.method" target="_blank">{{$config.API_URL+method.method}}</a>
          </td>
        </tr>
        <tr>
          <td>Access level:</td>
          <td>{{method.level ===0 ?'Public API': method.level ===1 ?'User API': method.level ===2 ?'Admin API':
            method.level ===3 ?'Server API (Call Only Server)': 'ERROR ACCESS'}}
          </td>
        </tr>
        <tr>
          <td>Тип:</td>
          <td>all</td>
        </tr>
        <tr v-if="method.description > 0">
          <th colspan="2">Description of the method</th>
        </tr>
        <tr v-if="method.description > 0">
          <td colspan="2">{{method.description}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <p class="title-method" v-if="method.param && Object.keys(method.param).length > 0">POST PARAMETERS</p>
    <table class="uk-table uk-table-middle uk-table-hover uk-table-striped"
           v-if="method.param && Object.keys(method.param).length > 0">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Required</th>
        <th>Error Code</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(el,method_name) in method.param" :key="'param_i_'+method_name">
        <td>{{method_name}}</td>
        <td>{{el.title}}</td>
        <td>{{el.type.name}}</td>
        <td>{{el.required ? 'YES': 'NO'}}</td>
        <td>{{el.error_code}}</td>
      </tr>
      </tbody>
    </table>
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
