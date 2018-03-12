<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
      <div class="page__desc">对话框，采用小程序原生的modal</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @click="openConfirm">Confirm Dialog</button>
        <button class="weui-btn" type="default" @click="openAlert">Alert Dialog</button>
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
    openConfirm() {
      wx.showModal({
        title: '弹窗标题',
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        confirmText: "主操作",
        cancelText: "辅助操作",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('用户点击主操作')
          } else {
            console.log('用户点击辅助操作')
          }
        }
      });
    },
    openAlert() {
      wx.showModal({
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
  }
}
</script>

<style>

</style>
