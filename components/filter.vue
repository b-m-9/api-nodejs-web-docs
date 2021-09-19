<template>
  <div class="uk-container uk-container-center">

    <div class="uk-grid">
      <div class="uk-width-1-2"><h3>Methods АPI</h3></div>
      <div class="uk-width-1-2 uk-text-right">
        <ul class="list-filter-btn">
          <li><span>Access:</span></li>
          <li>
            <button class="uk-button uk-button-primary" :class="{active: methodLevel===1}" id="btn-scan-type-1" @click="setGroup(1)">All</button>
          </li>
          <li>
            <button class="uk-button uk-button-primary" :class="{active: methodLevel===2}" id="btn-scan-type-2" @click="setGroup(2)">Public</button>
          </li>
          <li>
            <button class="uk-button uk-button-primary" :class="{active: methodLevel===3}" id="btn-scan-type-3" @click="setGroup(3)">Private</button>
          </li>
        </ul>
      </div>
    </div>
    <form class="method-block uk-margin-top uk-form" onsubmit="return false;" action="#">
      <div class="uk-grid uk-grid-medium">
        <div class="uk-width-2-10">
          <div class="jq-selectbox jqselect uk-width-1-1" id="group-scan-styler">
            <select class="uk-width-1-1" style="background: #142857;border: 0;height: 45px;color: #97b0d6">
              <option value="all">All groups</option>
            </select>
          </div>
        </div>
        <div class="uk-width-8-10">
          <div class="uk-grid uk-grid-collapse">
            <div class="uk-width-8-10">
              <div class="uk-form-icon uk-width-1-1">
                <i class="uk-icon-search"></i>
                <input class="uk-width-1-1" id="input-scan" type="text" placeholder="Search by name or description">
              </div>
            </div>
            <div class="uk-width-2-10">
              <button class="uk-button uk-width-1-1 button-form-find" id="btn-scan" type="button">Search<img
                class="uk-margin-left" src="~/static/images/icon_arrow_enter.png" alt="" width="12" height="8"></button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="uk-grid method-name uk-margin-top">
      <div class="uk-width-3-10"><span>method</span></div>
      <div class="uk-width-5-10"><span>description</span></div>
      <div class="uk-width-2-10 uk-text-center"><span>group</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    methodLevel: {type: Number, default: 1},
  },
  methods: {
    setGroup(type) {
      this.$emit('setGroup', type);
    }
  }
}
</script>
