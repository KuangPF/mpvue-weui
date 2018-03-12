<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Progress</div>
      <div class="page__desc">进度条，这里采用小程序原生的progress</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="weui-progress">
        <div class="weui-progress__bar">
          <progress percent="0" stroke-width="3" />
        </div>
        <div class="weui-progress__opr">
          <icon type="cancel" size="22"></icon>
        </div>
      </div>
      <div class="weui-progress">
        <div class="weui-progress__bar">
          <progress percent="50" stroke-width="3" />
        </div>
        <div class="weui-progress__opr">
          <icon type="cancel" size="22"></icon>
        </div>
      </div>
      <div class="weui-progress">
        <div class="weui-progress__bar">
          <progress percent="80" stroke-width="3" />
        </div>
        <div class="weui-progress__opr">
          <icon type="cancel" size="22"></icon>
        </div>
      </div>
      <div class="weui-progress">
        <div class="weui-progress__bar">
          <progress :percent="progress" stroke-width="3" />
        </div>
        <div class="weui-progress__opr">
          <icon type="cancel" size="22"></icon>
        </div>
      </div>
      <div class="weui-btn-area">
        <button type="primary" @click="upload" :disabled="disabled">上传</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      disabled: false
    }
  },
  methods: {
    upload() {
      if (this.disabled) return;
      this.progress = 0;
      this.disabled = true;
      this._next.call(this);
    },

    _next() {
      var _this = this;
      if (_this.progress >= 100) {
        _this.disabled = false;
        return true;
      }
      _this.progress++
      setTimeout(function () {
        _this._next.call(_this);
      }, 20);
    }
  }
}
</script>

<style scoped>
.weui-progress {
  margin-bottom: 24px;
}
</style>
