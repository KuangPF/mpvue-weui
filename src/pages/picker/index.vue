<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Picker</div>
      <div class="page__desc">选择器，这里使用小程序原生的picker。</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <button type="default">单列选择器</button>
        </picker>
        <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
          <button type="default">时间选择器</button>
        </picker>
        <picker class="weui-btn" mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
          <button type="default">日期选择器</button>
        </picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      index: 0,
      date: '2016-09-01',
      time: '12:01'
    }
  },
  methods: {
    bindPickerChange(e) {
      console.log('选中的值为：' + this.array[e.mp.detail.value]);
    },
    bindTimeChange(e) {
      console.log('选中的时间为：' + e.mp.detail.value);
    },
    bindDateChange(e) {
      console.log('选中的日期为：' + e.mp.detail.value);
    }
  }
}
</script>

<style>

</style>
