<template>
  <li :aria-hidden="!(tab===1)" :class="{'uk-active':tab===1}">

    <div class="table__block-api">

      <h4 class="table__block--title">Information about the method.</h4>

      <div class="table__method border-sh ">

        <table>
          <tbody>
          <tr>
            <td>Method name</td>
            <td>{{method.method}}
              <span class="copy" v-clipboard:copy="method.method"
                    v-clipboard:success="onCopy">
                <img src="~/static/images/copy.svg" alt="copy">
              </span>
            </td>
          </tr>
          <tr>
            <td>Method URL:</td>
            <td><a :href="$config.API_URL+method.method" target="_blank">{{$config.API_URL+method.method}}</a>
              <span class="copy" v-clipboard:copy="$config.API_URL+method.method"
                    v-clipboard:success="onCopy">
                <img src="~/static/images/copy.svg" alt="copy">
              </span>
            </td>
          </tr>
          <tr>
            <td>Access level:</td>
            <td>{{method.level ===0 ?'Public API': method.level ===1 ?'User API': method.level ===2 ?'Admin API':
              method.level ===3 ?'Server API': 'ERROR'}} <span>- {{method.level ===0 ?'All clients': method.level ===1 ?'User': method.level ===2 ?'Admin':
              method.level ===3 ?'Only server call': 'ACCESS'}}</span></td>
          </tr>
          <tr>
            <td>Тип</td>
            <td>all</td>
          </tr>
          </tbody>
        </table>

      </div>

      <h4 class="table__block--title table__block--title__">POST PARAMETERS

        <div class="table__block--btn-group">
          <button class="btn ">
            <span class="copy">
                <img src="~/static/images/copy.svg" alt="copy" style="width: 12px">
            </span>JSON
          </button>
          <button class="btn ">
            <span class="copy">
                <img src="~/static/images/copy.svg" alt="copy" style="width: 12px">
            </span>AXIOS
          </button>
        </div>

      </h4>

      <div class="table__param">

        <table v-if="method.param && Object.keys(method.param).length > 0">

          <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Required</td>
            <td style="width: 120px;">Error code</td>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(el,param_name) in method.param" :key="'param_i_'+param_name">
            <td>{{param_name}} <i class="fal fa-copy"
                                  v-clipboard:copy="param_name"
                                  v-clipboard:success="onCopy"></i></td>
            <td>{{el.title}}</td>
            <td>{{el.type.name}}</td>
            <td>{{el.required ? 'YES': 'NO'}}</td>
            <td>{{el.error_code}}</td>
          </tr>
          </tbody>

        </table>

      </div>

    </div>
  </li>

</template>

<script>
  export default {
    props: {
      method: {type: Object, required: true},
      tab: {type: Number, required: true},
    },
    methods: {
      onCopy() {
        console.log('copy')
      }
    }
  }
</script>
