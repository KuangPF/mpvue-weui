<template>
  <div class="page">
    <picker class="weui-btn" mode="region" :value="region" @change="CityChange">
      <button type="default">城市选择器</button>
    </picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: ['广东省', '广州市', '海珠区'],
    }
  },
  methods: {
    CityChange(e) {
      console.log('选中的城市为：' + e.mp.detail.value);
    }
  }
}
</script>

<style>
page {
  margin-top: 100px;
}
</style>
