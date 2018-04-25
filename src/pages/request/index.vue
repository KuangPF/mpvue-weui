<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Request</div>
      <div class="page__desc">网络请求，可以使用小程序原生 wx.request 进行操作，也可以使用第三方 flyio 网络库，本示例是基于 flyio 网络库。</div>
    </div>
    <div class="page__bd">
      <div class="weui-cells__title">点击相关按钮获取对应的最新新闻</div>
      <div class="weui-btn-area">
        <button class="weui-btn mini-btn" type="primary" size="mini" @click="getNewsData('top')">头条</button>
        <button class="weui-btn mini-btn" type="primary" size="mini" @click="getNewsData('junshi')">军事</button>
        <button class="weui-btn mini-btn" type="primary" size="mini" @click="getNewsData('tiyu')">体育</button>
        <button class="weui-btn mini-btn" type="primary" size="mini" @click="getNewsData('yule')">娱乐</button>
      </div>
      <div class='content-list'>
        <block v-for="(item,index) in contentNewsList" :key="index">
          <div class='list-item'>
            <div class='list-item-content'>
              <div class='list-item-left'>
                <image :src="item.thumbnail_pic_s"></image>
              </div>
              <div class='list-item-right'>
                <div class='article-title'>{{item.title}}</div>
                <div class='article-source'>{{item.author_name}}</div>
                <div class='article-editTime'>{{item.date}}</div>
              </div>
            </div>
          </div>
        </block>
      </div>
    </div>

  </div>
</template>

<script>
import Fly from "flyio/dist/npm/wx";
export default {
  data() {
    return {
      contentNewsList: []
    }
  },
  methods: {
    getNewsData: function (type) {
      wx.showLoading({
        title: '加载中',
        mask: true
      })

      let fly = new Fly; //创建fly实例
      fly.get('https://v.juhe.cn/toutiao/index', {
        type: type,
        key: 'fc35d7872c25744ab4669c7d9dbcf15e'
      }).then(res => {
        wx.hideLoading()
        this.contentNewsList = res.data.result.data;
      })
    }
  }
}
</script>

<style>
.content-list {
  background-color: #fff;
  z-index: 1;
  position: relative;
}
.list-item {
  height: 180rpx;
  width: 100%;
  box-sizing: border-box;
}
.list-item-content {
  padding: 20rpx 30rpx 20rpx 30rpx;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  box-sizing: border-box;
}
.list-item-left {
  height: 140rpx;
  width: 186rpx;
  margin-right: 20rpx;
  float: left;
}
.list-item-left image {
  width: 100%;
  height: 100%;
}
.list-item-right {
  float: left;
  width: 484rpx;
  height: 140rpx;
  position: relative;
}
.article-title {
  font-size: 14px;
  color: #404040;
  text-align: justify;
  height: 86rpx;
  overflow-y: hidden;
}
.article-source::before {
  content: "作者:";
  font-size: 12px;
  color: #888;
  margin-right: 10rpx;
}
.article-source {
  font-size: 12px;
  color: #888;
  position: absolute;
  bottom: 0;
  right: 0;
}
.article-editTime {
  font-size: 12px;
  color: #a8a8a8;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
