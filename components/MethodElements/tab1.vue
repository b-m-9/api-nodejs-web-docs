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
          <td>Server API (Call Only Server)</td>
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
    <p class="title-method">POST PARAMETERS</p>
    <table class="uk-table uk-table-middle uk-table-hover uk-table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default value</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>template</td>
        <td>temp pug (./mailer/__template__.pug)</td>
        <td>STRING</td>
        <td>NO</td>
        <td></td>
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
