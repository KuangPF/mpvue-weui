<template>
  <div class="page">
    <form @submit="formSubmit" @reset="formReset">
      <view class="section section_gap">
        <view class="section__title">switch</view>
        <switch name="switch" />
      </view>
      <button class="" type="paramy" open-type="share">btn</button>
    </form>
    <button open-type="contact" session-from="kpf" send-message-title="ttitle" send-message-path="sss" show-message-card=true>进入客服会话</button>
    <button open-type="getUserInfo" @getuserinfo='getuserinfo' lang="zh_CN">打开APP</button>
    <button open-type="launchApp" app-parameter="wechat" @error="launchAppError" hover-class='nones'>打开APP</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    formSubmit() {
      console.log('tijiao');
    },
    formReset() {
      console.log('ssss')
    },
    launchAppError(e) {
      console.log(e);
    },
    getuserinfo(e) {
      console.log(e);
    }
  }

}
</script>

<style>
.nones {
  color: red;
}
</style>
