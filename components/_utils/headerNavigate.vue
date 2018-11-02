<template>
  <div class="uk-grid">

    <div class="uk-width-1-2" v-if="$config.logoBase64">
      <a class="logo" href="#" style="width: 180px;">
        <img :src="$config.logoBase64"/>
      </a>
    </div>
    <div class="uk-width-1-2" v-else>
      <a class="logo" href="#">
        <span class="main-logo">Documentation</span>
        <span class="after-logo">{{$config.projectName}}</span>
        <span class="version-logo"></span>
      </a>
    </div>
    <div class="uk-width-1-2 uk-text-right" :class="{'add-margin':!!$config.logoBase64}">
      <ul class="nav-list">
        <li><a href="">Auth</a></li>
        <li><a href="">Methods</a></li>
        <li><a href="">Support</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .add-margin{margin-top: 20px}
</style>
