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
        <picker class="weui-btn" mode="multiSelector" @change="MultiPickerChange" :value="indexMulPicker" :range="multiArray" @columnchange="MultiPickerColumChange">
          <button type="default">多列选择器</button>
        </picker>
        <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
          <button type="default">时间选择器</button>
        </picker>
        <picker class="weui-btn" mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
          <button type="default">日期选择器</button>
        </picker>
        <picker class="weui-btn" mode="region" :value="region" @change="CityChange">
          <button type="default">城市选择器</button>
        </picker>
        <button type="default" class="weui-btn" @click="multiLinkagePicker">多级联动</button>
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
      time: '12:01',
      indexMulPicker: [0, 1, 1],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      region: ['广东省', '广州市', '海珠区']
    }
  },
  methods: {
    bindPickerChange(e) {
      console.log('选中的值为：' + this.array[e.mp.detail.value]);
    },
    MultiPickerChange(e) {
      console.log('选中的值为：' + this.multiArray[0][e.mp.detail.value[0]] + '-' + this.multiArray[1][e.mp.detail.value[1]] + '-' + this.multiArray[2][e.mp.detail.value[2]])
    },
    MultiPickerColumChange(e) {
      console.log('列发生变化：' + '第' + parseInt(e.mp.detail.column + 1) + '列发生了变化，这列变化的值为:' + this.multiArray[e.mp.detail.column][e.mp.detail.value]);
    },
    bindTimeChange(e) {
      console.log('选中的时间为：' + e.mp.detail.value);
    },
    bindDateChange(e) {
      console.log('选中的日期为：' + e.mp.detail.value);
    },
    CityChange(e) {
      console.log('选中的城市为：' + e.mp.detail.value);
    },
    multiLinkagePicker() {
      wx.navigateTo({
        url: '../mulLinkagePicker/mulLinkagePicker'
      })
    }
  }
}
</script>

<style>

</style>
