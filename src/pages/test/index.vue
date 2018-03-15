<template>
  <div class="page">
    <div class="weui-btn-area">
      <picker class="weui-btn" @change="PickerChange" :value="index" :range="array">
        <button type="default">单列选择器</button>
      </picker>
      <picker class="weui-btn" mode="multiSelector" @change="MultiPickerChange" :value="index" :range="multiArray">
        <button type="default">多列选择器</button>
      </picker>
      <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
        <button type="default">时间选择器</button>
      </picker>
      <picker class="weui-btn" mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="DateChange">
        <button type="default">日期选择器</button>
      </picker>
      <picker class="weui-btn" mode="region" :value="region"  @change="CityChange">
        <button type="default">城市选择器</button>
      </picker>
    </div>
  </div>
</template>

<script>
import base64 from '../../../static/images/base64';
export default {
  data() {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      index: 1,
      date: '2016-09-01',
      time: '12:01',
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      region: ['广东省', '广州市', '海珠区'],
    }
  },
  methods: {
    PickerChange(e) {
      console.log('选中的值为：' + this.array[e.mp.detail.value]);
    },
    MultiPickerChange(e) {
      console.log('选中的值为：' + this.multiArray[0][e.mp.detail.value[0]] + '-' + this.multiArray[1][e.mp.detail.value[1]] + '-' + this.multiArray[2][e.mp.detail.value[2]])
    },
    TimeChange(e) {
      console.log('选中的时间为：' + e.mp.detail.value);
    },
    DateChange(e) {
      console.log('选中的日期为：' + e.mp.detail.value);
    },
    CityChange(e) {
      console.log('选中的城市为：' + e.mp.detail.value);
    }
  }
}
</script>

<style>
page {
  margin-top: 50px;
  padding: 15px;
  box-sizing: border-box;
}
</style>

