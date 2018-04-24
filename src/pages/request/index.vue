<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Request</div>
      <div class="page__desc">网络请求。可以使用小程序原生 wx.request 进行操作，也可以使用第三方 flyio 网络库，本示例使用 flyio 网络库进行请求。</div>
    </div>
    <div class="page__bd">
      <div class="weui-cells__title">点击相关按钮获取对应的最新新闻</div>
      <div class="weui-btn-area">
        <button class="weui-btn mini-btn" type="primary" size="mini">获取军事新闻</button>
        <button class="weui-btn mini-btn" type="primary" size="mini">获取体育新闻</button>
      </div>
    </div>

  </div>
</template>

<script>
import Fly from "flyio/dist/npm/wx";
export default {
  data() {
    return {

    }
  },
  mounted() {
    /* var fly = new Fly; //创建fly实例
    fly.get('https://v.juhe.cn/toutiao/index', {
      type: '头条',
      key: 'fc35d7872c25744ab4669c7d9dbcf15e'
    }).then(function (res) {
      console.log(res.data.result.data);
    }) */
  }
}
</script>

<style>

</style>
