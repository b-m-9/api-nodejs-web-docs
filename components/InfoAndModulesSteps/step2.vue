<template>
  <li aria-hidden="false" class="uk-active">
    <h3>WS server</h3>
    <p>this protocol dont support (coming soon)</p>
    <div class="block-code">
      <div class="header-code">
        <ul class="list-dotter">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="main-code uk-flex uk-flex-center uk-flex-middle"><p></p>
        <div class="code-type">Connect</div>
      </div>
    </div>
    <p>You can get your authorization token from api (<b>getTokenSocket</b>) it will work for 5 minutes or 1
      successful connection please ask it before sending auth</p>
    <div class="block-code">
      <div class="header-code">
        <ul class="list-dotter">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="main-code uk-flex uk-flex-center uk-flex-middle"><p style="text-transform: none;">
        {"method":"<span>auth</span>",token:"<span>TOKEN</span>"}</p>
        <div class="code-type">⬆ Send data for auth</div>
      </div>
    </div>
    <p>Wait response websocket server</p>
    <div class="block-code">
      <div class="header-code">
        <ul class="list-dotter">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="main-code uk-flex uk-flex-center uk-flex-middle"><p style="text-transform: none;">
        {"method":"<span>auth</span>","data":{"id":<span>YOU_USER_ID</span>,"success":true}}</p>
        <div class="code-type">⬇ Received event auth</div>
      </div>
    </div>
    <p>Event new message</p>
    <div class="block-code">
      <div class="header-code">
        <ul class="list-dotter">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="main-code uk-flex uk-flex-center uk-flex-middle"><p style="text-transform: none;">
        {"method":"<span>newMessage</span>","data":{"id":87,"senderId":2,"recipientId":1,"threadId":1,"message":"Message
        Text","attachedUrl":null,"attachedType":null,"attachedTitle":null,"read":false,"createdAt":"2018-02-23T13:14:41.064Z"}}
      </p>
        <div class="code-type">⬇ Received event message</div>
      </div>
    </div>
    <hr>
    <p>ATTENTION the connection to the web socket is restricted, you can create only one active connection all
      and not more than 1000 connections per hour</p>
  </li>

</template>
