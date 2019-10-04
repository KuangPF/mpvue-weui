<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Gallery</div>
      <div class="page__desc">画廊，建议采用小程序原生的 wx.chooseImage 和 wx.predivImage 来实现，详情请看小程序文档。</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @click="openGallery">Gallery</button>
      </div>
      <div :class="[istrue ? 'weui-gallery_show':'', 'weui-gallery']" @click="closeGallery">
        <div class="weui-gallery__info">1/17</div>
        <div class="weui-gallery__img__wrp">
          <img mode="aspectFit" class="weui-gallery__img" src="/static/images/pic_160.png" />
        </div>
        <div class="weui-gallery__opr">
          <navigator href="javascript:" class="weui-gallery__del">删除</navigator>
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
    openGallery() {
      this.istrue = true
    },
    closeGallery() {
      this.istrue = false
    }
  }
}
</script>

<style>
</style>
