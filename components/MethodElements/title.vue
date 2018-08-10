<template>
  <div class="uk-grid">
    <div class="uk-width-3-10">
                <span class="method-name-title">
                  <i class="icon-main" :class="method.iconClass" :style="'color: #'+method.iconColor"></i>
                  <i class="icon-actions uk-icon-plus" style="color: #137d2a;"></i>
                  {{method.method}}
                </span>
    </div>

    <div class="uk-width-5-10">
      <span class="title">{{method.title}}</span>
    </div>

    <div class="uk-width-2-10 uk-text-right">
      <span>
        <div class="uk-badge bage-http" v-if="method.level === 0">Public</div>
        <div class="uk-badge bage-http" v-if="method.level === 1">User</div>
        <div class="uk-badge bage-http" v-if="method.level === 2">Admin</div>
        <div class="uk-badge bage-http" v-if="method.level === 3">Server</div>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      method: {type: Object, required: true}
    }
  }
</script>
<style scoped>
  .uk-grid *{
    -webkit-user-select: none;
    -moz-user-select: none;
  }
</style>
