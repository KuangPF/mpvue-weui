<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Slider</div>
      <div class="page__desc">滑块，这里采用小程序原生的slider。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <slider @change="sliderChange1" />
      <slider show-value value="50" @change="sliderChange2" />
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
    sliderChange1(e) {
      console.log('滑动选择的值为：' + e.mp.detail.value);
    },
    sliderChange2(e) {
      console.log('滑动选择的值为：' + e.mp.detail.value);
    }
  }
}
</script>

<style>

</style>
