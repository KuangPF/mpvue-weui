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
        url: '../msg-success/msg-success'
      })
    },
    openFail: function () {
      wx.navigateTo({
        url: '../msg-fail/msg-fail'
      })
    }
  }
}
</script>

<style>

</style>
