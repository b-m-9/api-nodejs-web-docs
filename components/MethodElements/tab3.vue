<template>
  <li :aria-hidden="!(tab===3)" :class="{'uk-active':tab===3}">
    <div style="margin: -15px;">
      <form method="post" :action="$config.API_URL+method.method" target="__blank" @submit.prevent="testReq">
        <input type="hidden" :value="$config.API_URL+method.method" name="methodURL"/>
        <div class="request-editor-url-container">
          <div class="request-editor__main" style="top: initial; width: initial;">
            <div class="request-editor__main__url-group">
              <div class="request-method-editor">POST</div>
              <div class="request-url-editor">
                {{$config.API_URL+method.method}}
              </div>
            </div>
            <div class="request-editor__main__button-group">
              <div class="request-editor-send-button">
                <div class="btn-group btn-group-separated">
                  <button type="submit" class="btn" tabindex="0">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="request-body-editors" v-if="method.param && Object.keys(method.param).length > 0">
          <div class="key-value-form-header-row">
            <div class="key-value-form-row header-row">
              <div class="key-value-form-actions">
                <div class="key-value-form-row__toggle"></div>
                <div class="feedback-state"></div>
              </div>
              <div class="auto-suggest-group">
                <div class="key-value-form-header-item" style="flex: 0 0 33%;">
                  <div class="header-content">Key</div>
                </div>
                <div class="key-value-form-header-item" style="flex: 0 0 33%;">
                  <div class="resize-handle" data-index="0" style="touch-action: none;"></div>
                  <div class="header-content">Value</div>
                </div>
                <div class="key-value-form-header-item" style="flex: 0 0 34%;">
                  <div class="resize-handle" data-index="1" style="touch-action: none;"></div>
                  <div class="header-content description">Description</div>
                </div>
              </div>
            </div>
          </div>
          <params_3 :param="method.param"/>

        </div>
      </form><!-- code container-->
      <div class="code-container uk-margin-top">
        <div class="header-container">
          <div class="uk-grid">
            <div class="uk-width-2-3">
              <ul class="swithcer-code">
                <li :class='{"uk-active":tab_active  === 0}'>
                  <a style="cursor: pointer" @click="tab_active =0">Body</a>
                </li>
                <li :class='{"uk-active":tab_active  === 1}'>
                  <a style="cursor: pointer" @click="tab_active =1">Request</a>
                </li>
                <li :class='{"uk-active":tab_active  === 2}'>
                  <a style="cursor: pointer" @click="tab_active =2">Headers<span
                    class="header-request-num">(SOON)</span></a>
                </li>
              </ul>
            </div>
            <div class="uk-width-1-3 uk-text-right">
              <ul class="list-code-status" style="padding:0 20px;">
                <li>Status:<span>{{status}} - {{statusText}}</span></li>
                <li>Time:<span id="testTime-sendEmailNotifyAllAdmin">{{spendTime}} ms</span></li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="uk-switcher uk-margin-top" id="code-main-switchsendEmailNotifyAllAdmin"
            style="padding:0 20px;">
          <li :class='{"uk-active":tab_active  === 0}'>

            <div v-if="res_data && typeof res_data === 'object'">
              <json-viewer :data="res_data" :deep="2" :showLength="true"></json-viewer>
            </div>
            <div v-else>Click send.</div>

          </li>
          <li :class='{"uk-active":tab_active  === 1}'>
            <div v-if="req_param && typeof req_param === 'object'">
              <json-viewer :data="req_param" :deep="2" :showLength="true"></json-viewer>
            </div>
            <div v-else>Click send.</div>
          </li>
          <li :class='{"uk-active":tab_active  === 2}'>
            <div>SOON.</div>
          </li>
        </ul>
      </div><!-- end code container--></div>
  </li>

</template>

<script>
  import params_3 from '~/components/MethodElements/params_3.vue'
  import qs from 'querystring';

  export default {
    components: {params_3},
    data() {
      return {
        tab_active: 0,
        res_data: false,
        status: 0,
        statusText: 'Wait send',
        req_param: false,
        spendTime: 0
      };
    },
    props: {
      method: {type: Object, required: true},
      tab: {type: Number, required: true},
    },
    methods: {
      testReq(submitEvent) {
        let tS = Date.now();
        let request = {};

        for (let item in submitEvent.target) {
          if (submitEvent.target.hasOwnProperty(item)) {
            const record = submitEvent.target[item];

            if (record.name && record.name !== '') {
              request[record.name] = record.value
            }
          }
        }
        let param = {};
        for (let key in  request) {
          if (request.hasOwnProperty(key)) {
            if (request['$enable_field$' + key] === '1') {
              if (request[key] === '$undefined$') request[key] = undefined;
              if (request[key] === '$true$') request[key] = true;
              if (request[key] === '$false$') request[key] = false;
              if (request[key] !== undefined)
                param[key] = request[key]
            }
          }
        }
        param = qs.parse(param);
        this.req_param = param;
        console.log('SEND: ', request.methodURL, param);

        return this.$axios.post(request.methodURL, param)
          .then((res) => {
            this.res_data = res.data;
            this.status = res.status;
            this.statusText = res.statusText;
            this.spendTime = Date.now() - tS;
          })
          .catch(console.error);


      }
    }
  }
</script>
<style scoped>
  .key-value-form-actions input {
    margin: 8px;
  }
</style>
