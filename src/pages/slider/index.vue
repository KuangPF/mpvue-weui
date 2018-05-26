<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Slider</div>
      <div class="page__desc">滑块，这里采用小程序原生的slider。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <slider @change="sliderChange1" />
      <slider show-value value="50" @change="sliderChange2" />

      <div class="weui-cells__title issues-content">动态修滑块最大值与最小值(默认区间为[100,500])：</div>
      <slider show-value :value="sliderValue" :min='sliderMin' :max='sliderMax' @change="sliderChange3" />
      <div class="weui-cells__title">滑动修改滑块最小值(100-200)：</div>
      <slider show-value :value="udpateSliderMinValue" min=100 max=200 @change="sliderChange4" />
      <div class="weui-cells__title">滑动修改滑块最大值(900-1000)：</div>
      <slider show-value :value="updateSliderMaxValue" min=900 max=1000 @change="sliderChange5" />
      <div class="slider-value-text">{{sliderValueText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: '300',
      sliderMin: 100,
      sliderMax: 500,
      sliderValueText: ''
    }
  },
  methods: {
    sliderChange1(e) {
      console.log('滑动选择的值为：' + e.mp.detail.value);
    },
    sliderChange2(e) {
      this.sliderValue = e.mp.detail.value;
      console.log('滑动选择的值为：' + e.mp.detail.value);
    },
    sliderChange3(e) {
      this.sliderValue = e.mp.detail.value;
      this.sliderValueText = `滑动选择的值为： ${e.mp.detail.value}`;
    },
    sliderChange4(e) {
      this.sliderMin = e.mp.detail.value;
    },
    sliderChange5(e) {
      this.sliderMax = e.mp.detail.value;
    }
  }
}
</script>

<style>
.issues-content {
  margin-top: 50px;
}
.slider-value-text {
  margin-top: 15px;
  font-size: 20px;
  color: #888;
}
</style>
