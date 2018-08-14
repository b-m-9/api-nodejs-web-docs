<template>
  <li :aria-hidden="!(tab===3)" :class="{'uk-active':tab===3}">
    <div style="margin: -15px;">
      <form method="post" :action="$config.API_URL+method.method" target="__blank">
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
                  <div class="btn" tabindex="0">
                    Send
                  </div>
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

          <div class="key-value-form-row" v-for="(el,method_name) in method.param" :key="'param_test_'+method_name">
            <div class="key-value-form-actions"><input type="checkbox" checked :disabled="el.required"/></div>
            <div class="auto-suggest-group">
              <div class="key-value-form-column" style="flex: 0 0 33%;"><span
                data-text="true">{{method_name}}</span></div>
              <div class="key-value-form-column" style="flex: 0 0 33%;">
                <select class="key-value-form-input" :placeholder="el.type.name" :name="method_name"
                        v-if="el.type.name === 'BOOLEAN'">
                  <option :value="undefined" selected disabled>Select BOOLEAN</option>
                  <option :value="true">True</option>
                  <option :value="false">false</option>
                </select>
                <input class="key-value-form-input" :placeholder="el.type.name" :name="method_name"
                       v-else-if="el.type.name === 'INTEGER'" type="number" step="1">
                <input class="key-value-form-input" :placeholder="el.type.name" :name="method_name"
                       v-else-if="el.type.name === 'FLOAT'" type="number" step="0.01">
                <input class="key-value-form-input" :placeholder="el.type.name" :name="method_name" v-else>

              </div>
              <div class="key-value-form-column" style="flex: 0 0 34%;"><span data-text="true">{{el.title}}</span>
              </div>
            </div>

            <div class="key-value-form-row__delete">
              <div class="key-value-form-row__delete__icon"></div>
            </div>
          </div>
        </div>
      </form><!-- code container-->
      <div class="code-container uk-margin-top">
        <div class="header-container">
          <div class="uk-grid">
            <div class="uk-width-2-3">
              <ul class="swithcer-code">
                <li aria-expanded="true" class="uk-active">
                  <a href="">Body</a>
                </li>
                <li aria-expanded="false">
                  <a href="">Request</a>
                </li>
                <li aria-expanded="false">
                  <a href="">Headers<span class="header-request-num">(0)</span></a>
                </li>
              </ul>
            </div>
            <div class="uk-width-1-3 uk-text-right">
              <ul class="list-code-status" style="padding:0 20px;">
                <li>Status:<span id="testStatus-sendEmailNotifyAllAdmin">wait</span></li>
                <li>Time:<span id="testTime-sendEmailNotifyAllAdmin">0 ms</span></li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="uk-switcher uk-margin-top" id="code-main-switchsendEmailNotifyAllAdmin"
            style="padding:0 20px;">
          <li aria-hidden="false" class="uk-active">
            <div id="testResponse-sendEmailNotifyAllAdmin">Click send.</div>
          </li>
          <li aria-hidden="true">
            <div id="testRequest-sendEmailNotifyAllAdmin">Click send.</div>
          </li>
          <li aria-hidden="true">
            <div id="testHeaders-sendEmailNotifyAllAdmin">Click send.</div>
          </li>
        </ul>
      </div><!-- end code container--></div>
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
<style scoped>
  .key-value-form-actions input {
    width: 28px;
    height: 28px;
    padding: 0;
    margin: 0;
  }
</style>
