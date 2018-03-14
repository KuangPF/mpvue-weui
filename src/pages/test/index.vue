<template>
  <div class="page">
    <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">单行列表</div>
        <div class="weui-cell__ft weui-cell__ft_in-access" style="font-size: 0">
          <image src="../../../static/images/pic_160.png" style="width: 50px; height: 50px; display: block"/>
          <div class="weui-badge weui-badge" style="margin-left: 5px;margin-right: 5px;">new</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import base64 from '../../../static/images/base64';
export default {
  data() {
    return {
      icon: '',
      files: []
    }
  },
  mounted() {
    this.icon = base64.icon20;
  },
  methods: {
    chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.files = _this.files.concat(res.tempFilePaths)
        },
        fail: function () {
          console.log('fail');
        },
        complete: function () {
          console.log('commplete');
        }
      })
    },
    predivImage(e) {
      console.log(e);
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files // 需要预览的图片http链接列表
      })
    }
  }

}
</script>

<style>
slider {
  margin-bottom: 60px;
}
</style>
