<template>
  <div class="footer">
    <div class="uk-container uk-container-center">
      <div class="uk-grid uk-margin-large-top">
        <div class="uk-width-1-2"><p class="uk-margin-top">All rights reserved {{$config.projectName}}</p></div>
        <div class="uk-width-1-2 uk-text-right uk-margin-top">
          <ul class="nav-footer">
            <li><a :href="$config.baseUrl">{{$config.projectName}}</a></li>
            <li v-if="$config.hideDeveloper !== true"><a href="https://github.com/medve-dev/" target="_blank">Developer @medve_dev</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
