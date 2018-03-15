<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">选项一的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">选项三的内容</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
export default {
  data() {
    return {
      tabs: ["选项一", "选项二", "选项三"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      fontSize: 30
    }
  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return 'weui-navbar__slider_0'
      }
      if (this.activeIndex == 1) {
        return 'weui-navbar__slider_1'
      }
      if (this.activeIndex == 2) {
        return 'weui-navbar__slider_2'
      }
    }
  },
  mounted() {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.sliderLeft = (res.windowWidth / _this.tabs.length - sliderWidth) / 2;
        _this.sliderOffset = res.windowWidth / _this.tabs.length * this.activeIndex;
      }
    });
  },
  methods: {
    tabClick(e) {
      console.log(e);
      this.sliderOffset = e.currentTarget.offsetLeft;
      this.activeIndex = e.currentTarget.id;
      console.log(this.activeIndex);
    }
  }
}
</script>

<style scoped>
page,
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-tab__content {
  padding-top: 60px;
  text-align: center;
}
.weui-navbar__slider_1 {
  left: 14.5px;
  transform: translateX(0);
  -webkit-transform: translateX(0);
}
.weui-navbar__slider_1 {
  left: 14.5px;
  transform: translateX(125px);
  -webkit-transform: translateX(125px);
}
.weui-navbar__slider_2 {
  left: 14.5px;
  transform: translateX(250px);
  -webkit-transform: translateX(250px);
}
</style>
