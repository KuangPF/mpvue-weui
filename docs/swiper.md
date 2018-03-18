# Swiper
滑块视图容器。

在`mpvue`框架中实现图片或者其他内容的轮播使用小程序原生`swiper`组件就可以完成该功能。`swiper`组件的参数如下：

**实际验证过： `mpvue` 框架对以下属性都是支持的**

### indicator-dots
* 类型：Boolean
* 默认值：false
* 说明：是否显示面板指示点

### indicator-color
* 类型：Color
* 默认值：rgba(0, 0, 0, .3)
* 说明：指示点颜色

### indicator-active-color
* 类型：Color
* 默认值：#000000
* 说明：当前选中的指示点颜色

### autoplay
* 类型：Boolean	
* 默认值：false
* 说明：是否自动切换

### current
* 类型：Number
* 默认值：0
* 说明：当前所在滑块的 index

### current-item-id
* 类型：String
* 默认值：""
* 说明：当前所在滑块的 item-id ，不能与 current 被同时指定

### interval
* 类型：Number
* 默认值：5000
* 说明：自动切换时间间隔

### duration
* 类型：Number
* 默认值：500
* 说明：滑动动画时长

### circular
* 类型：Boolean
* 默认值：false
* 说明：是否采用衔接滑动

### vertical
* 类型：Boolean
* 默认值：false
* 说明：滑动方向是否为纵向

### previous-margin
* 类型：String
* 默认值："0px"
* 说明：前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值

### next-margin
* 类型：String
* 默认值："0px"
* 说明：后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值

### display-multiple-items
* 类型：Number
* 默认值：1
* 说明：同时显示的滑块数量

### skip-hidden-item-layout
* 类型：Boolean
* 默认值：false
* 说明：是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息

### bindchange
* 类型：EventHandle	
* 默认值：
* 说明：current 改变时会触发 change 事件，event.detail = {current: current, source: source}

### bindanimationfinish
* 类型：EventHandle	
* 默认值：
* 说明：动画结束时会触发 animationfinish 事件，event.detail 同上

示例代码如下：

```vue
<template>
  <div class="page">
    <view class="page__hd">
      <view class="page__title">Swiper</view>
      <view class="page__desc">滑块视图容器，这里采用小程序原生 swiper 组件实现。</view>
    </view>
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="item in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    }
  },
  methods: {
    swiperChange(e) {
      console.log('第' + e.mp.detail.current + '张轮播图发生了滑动');
    },
    animationfinish(e) {
      console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
    }
  }
}
</script>

<style>
.slide-image {
  width: 100%;
  height: 100%;
}
</style>

```

**效果**
![swiper01](_img/swiper01.gif )