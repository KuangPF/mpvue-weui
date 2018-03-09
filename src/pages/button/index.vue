<template>
  <div class="page">
    <div class="page">
      <div class="page__hd">
        <div class="page__title">Button</div>
        <div class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</div>
      </div>
      <div class="page__bd page__bd_spacing">
        <button class="weui-btn" type="primary">页面主操作 Normal</button>
        <button class="weui-btn" type="primary" disabled="true">页面主操作 Disabled</button>

        <button class="weui-btn" type="default">页面次要操作 Normal</button>
        <button class="weui-btn" type="default" disabled="true">页面次要操作 Disabled</button>

        <button class="weui-btn" type="warn">警告类操作 Normal</button>
        <button class="weui-btn" type="warn" disabled="true">警告类操作 Disabled</button>

        <div class="button-sp-area">
          <button class="weui-btn" type="primary" plain="true">按钮</button>
          <button class="weui-btn" type="primary" disabled="true" plain="true">按钮</button>

          <button class="weui-btn" type="default" plain="true">按钮</button>
          <button class="weui-btn" type="default" disabled="true" plain="true">按钮</button>

          <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button>
          <button class="weui-btn mini-btn" type="default" size="mini">按钮</button>
          <button class="weui-btn mini-btn" type="warn" size="mini">按钮</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex

export default {

  methods: {

  }
}

</script>
<style>

</style>
