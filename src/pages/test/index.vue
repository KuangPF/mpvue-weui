<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-btn-area">
        <button type="default" @click="open">ActionSheet</button>
      </div>
    </div>
  </div>
</template>

<script>
import base64 from '../../../static/images/base64';
export default {
  data() {
    return {
      itemList:['A', 'B', 'C']
    }
  },
  methods: {
    open() {
      let _this = this;
      wx.showActionSheet({
        itemList: this.itemList,
        success: function (res) {
          console.log("index：" + res.tapIndex, "用户选的值为：" + _this.itemList[res.tapIndex]);
        }
      });
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

