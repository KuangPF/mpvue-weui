<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Loading</div>
      <div class="page__desc">加载中</div>
    </div>
    <div class="page__bd">
      <div class="weui-loading__wrp">
        <div class="weui-loading"></div>
      </div>
      <div class="weui-loading__wrp">
        <div class="loading wx_dot_loading"></div>
      </div>
      <div class="weui-loading__wrp">
        <div class="loading wx_dot_loading wx_dot_loading_white"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
page {
  background-color: #ffffff;
}
.weui-loading__wrp {
  padding: 16px;
  text-align: center;
}
.weui-loading__wrp:last-child {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
