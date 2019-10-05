# Dialog
弹框

`Dialog`，也叫 “modal”，表现为带遮罩的弹框。

可调用微信 API `wx.showModal()` 实现原生 modal，或者模拟 Dialog，示例代码如下：

``` vue
<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
      <div class="page__desc">对话框，采用小程序原生的modal</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @click="openConfirm">原生 Dialog</button>
        <button class="weui-btn" type="default" @click="openDialog">模拟 Dialog</button>
      </div>
      <div :class="['weui-demo-dialog', istrue ? 'weui-demo-dialog_show' : '']">
        <div class="weui-mask" @click="closeDialog"></div>
        <div class="weui-dialog__wrp" @click="closeDialog">
          <div class="weui-dialog" catchtouchmove>
            <div class="weui-dialog__hd">
              <div class="weui-dialog__title">标题</div>
            </div>
            <div class="weui-dialog__bd">
              <image
                class="weui-article__img"
                src="/static/images/pic_article.png"
                mode="aspectFill"
                style="max-width:100%;"
              />
            </div>
            <div class="weui-dialog__ft">
              <div class="weui-dialog__btn weui-dialog__btn_default" @click="closeDialog">取消</div>
              <div class="weui-dialog__btn" @click="closeDialog">确定</div>
            </div>
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

```

**效果**

<img src='_img/dialog01.gif' width=350> 
