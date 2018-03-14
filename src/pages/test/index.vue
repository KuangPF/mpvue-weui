<template>
  <div class="page">
    <div class="weui-article">
      <div class="weui-article__h1">大标题</div>
      <div class="weui-article__section">
        <div class="weui-article__title">章标题</div>
        <div class="weui-article__section">
          <div class="weui-article__h3">1.1 节标题</div>
          <div class="weui-article__p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div class="weui-article__p">
            <image class="weui-article__img" src="../../../static/images/pic_article.png" mode="aspectFit" style="height: 180px" />
            <image class="weui-article__img" src="../../../static/images/pic_article.png" mode="aspectFit" style="height: 180px" />
          </div>
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
