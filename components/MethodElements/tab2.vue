<template>
  <li :aria-hidden="!(tab===2)" :class="{'uk-active':tab===2}">
    <p class="title-method">Response</p>
    <table class="uk-table uk-table-middle uk-table-hover uk-table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default value</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>success</td>
        <td>Status request method</td>
        <td></td>
        <td>true, false</td>
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
