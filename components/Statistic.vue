<template>

  <div class="block3">
    <div class="uk-container uk-container-center">
      <ul class="list-statistic uk-grid uk-grid-collapse uk-grid-width-1-6" data-uk-grid-margin="">
        <li class="uk-row-first">
          <div class="list-panel uk-flex uk-flex-center uk-flex-middle">
            <div><span>Uptime</span><span><img src="~/static/images/icon_statistic_01.png" alt="" width="20"
                                               height="21">99.999%</span></div>
          </div>
        </li>
        <li>
          <div class="list-panel uk-flex uk-flex-center uk-flex-middle">
            <div><span>Received queries</span><span><img src="~/static/images/icon_statistic_02.png" alt="" width="19"
                                                         height="21">{{stat.countQueries}}/min</span></div>
          </div>
        </li>
        <li>
          <div class="list-panel uk-flex uk-flex-center uk-flex-middle">
            <div><span>Methods</span><span><img src="~/static/images/icon_statistic_03.png" alt="" width="18"
                                                height="19">{{stat.count_method}}</span></div>
          </div>
        </li>
        <li>
          <div class="list-panel uk-flex uk-flex-center uk-flex-middle">
            <div><span>VCS hash</span><span style="text-transform: none;"># {{stat.commitHash}}</span></div>
          </div>
        </li>
        <li>
          <div class="list-panel uk-flex uk-flex-center uk-flex-middle">
            <div><span>latency</span><span><img src="~/static/images/icon_statistic_05.png" alt="" width="18"
                                                height="21">{{stat.latency_ms}}<span class="text-small">ms</span></span></div>
          </div>
        </li>
        <li>
          <div class="list-panel uk-flex uk-flex-center uk-flex-middle">
            <div><span>Application</span><span><span class="text-small">v</span>{{stat.version}}</span></div>
          </div>
        </li>
      </ul>
      <p class="uk-text-center">Statistics for 30 days - the data is updated every minute.</p></div>
  </div>
</template>


<script>
  export default {
    props: {
      stat: {type: Object, required: true}
    }
  }
</script>


