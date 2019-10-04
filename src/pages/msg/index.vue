<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Msg</div>
      <div class="page__desc">提示页</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @click="openSuccess">成功提示页</button>
        <button class="weui-btn" type="default" @click="openFail">失败提示页</button>
        <button class="weui-btn" type="default" @click="openText">无图标提示页</button>
        <button class="weui-btn" type="default" @click="openTextPrimary">无图标提示页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    openSuccess() {
      wx.navigateTo({
        url: '../msg-success/main'
      })
    },
    openFail: function () {
      wx.navigateTo({
        url: '../msg-fail/main'
      })
    },
    openText() {
      wx.navigateTo({
        url: '../msg-text/main'
      })
    },
    openTextPrimary: function () {
      wx.navigateTo({
        url: '../msg-text-primary/main'
      })
    }
  }
}
</script>

<style>
page {
  background-color: #ffffff;
}
page,
.page {
  height: 100%;
}
</style>
