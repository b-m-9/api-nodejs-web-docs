<template>
  <li aria-hidden="false" class="uk-active">
    <h3>HTTP Example:</h3>
    <p>For authorization, replace _API_KEY_ (coming soon)</p>

    <div class="block-code">
      <div class="header-code">
        <ul class="list-dotter">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="main-code uk-flex uk-flex-center uk-flex-middle"><p>
        https://exchanger_001.proexchanger.net/service/api/v1/<span>_METHOD_NAME_</span>/</p>
        <div class="code-type">HTTP</div>
      </div>
    </div>

    <p>params api_key is you user API key (get in you account)
      all responses have a latency ms parameter that indicates the time the request was processed by the server
      _METHOD_NAME_ specify method name<br><br>Please limit your queries to a maximum of 500 every 1 hour.</p>

    <h3>Export this API for</h3>

    <ul class="uk-grid uk-grid-width-1-3" data-uk-grid-margin="">
      <li class="uk-row-first">
        <a class="uk-button uk-button-secondary button-download uk-width-1-1"
           href="https://exchanger_001.proexchanger.net/service/api/v1/export/nodejs"
           style="background: none;  border: 2px solid #FFF;">
          <img src="~/static/images/icon_api_button_01.png" alt="" width="90" height="45">
          <span class="uk-display-block"><i class="uk-icon-download"></i> Import api to NodeJS</span>
        </a>
      </li>
      <li class=""><a class="uk-button uk-button-secondary button-download uk-width-1-1"
                      href="https://exchanger_001.proexchanger.net/service/api/v1/export/insomnia"
                      style="background: none;  border: 2px solid #FFF;"><img
        src="~/static/images/icon_api_button_02.png" alt="" width="125" height="45"><span
        class="uk-display-block"><i class="uk-icon-download"></i> Import api to Insomnia</span></a></li>
      <li class=""><a class="uk-button uk-button-secondary button-download uk-width-1-1"
                      href="https://exchanger_001.proexchanger.net/service/api/v1/export/postman"
                      style="background: none;  border: 2px solid #FFF;"><img
        src="~/static/images/icon_api_button_03.png" alt="" width="107" height="45"><span
        class="uk-display-block"><i class="uk-icon-download"></i> Import api to Postman</span></a></li>
    </ul>
  </li>

</template>
