<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Half Screen Dialog</div>
      <div class="page__desc">半屏弹窗，辅助完成当前页面任务时；提醒用户并引导用户的下一步操作；用户主动发起的任务时。</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @click="openDialog">Half Screen Dialog</button>
      </div>
      <div :class="['weui-demo-dialog', istrue ? 'weui-demo-dialog_show' : '']">
        <div class="weui-mask" @click="closeDialog"></div>
        <div class="weui-half-screen-dialog" catchtouchmove>
          <div class="weui-half-screen-dialog__hd">
            <div class="weui-half-screen-dialog__hd__side">
              <div @click="closeDialog" class="weui-icon-btn weui-icon-btn_close">关闭</div>
            </div>
            <div class="weui-half-screen-dialog__hd__main">
              <text class="weui-half-screen-dialog__title">标题</text>
              <text class="weui-half-screen-dialog__subtitle">标题</text>
            </div>
            <div class="weui-half-screen-dialog__hd__side">
              <div class="weui-icon-btn weui-icon-btn_more">更多</div>
            </div>
          </div>
          <div class="weui-half-screen-dialog__bd">
            <div class="weui-half-screen-dialog__desc">辅助描述内容，可根据实际需要安排</div>
            <div class="weui-half-screen-dialog__tips">辅助提示内容，可根据实际需要安排</div>
          </div>
          <div class="weui-half-screen-dialog__ft">
            <button type="default" class="weui-btn">辅助操作</button>
            <button type="primary" class="weui-btn">主操作</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      istrue: false
    }
  },
  methods: {
    openDialog() {
      this.istrue = true
    },
    closeDialog() {
      this.istrue = false
    }
  }
}
</script>

<style scoped>
page {
  background-color: #ffffff;
}
.weui-demo-dialog {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
}
.weui-demo-dialog_show {
  visibility: visible;
  opacity: 1;
}
</style>
