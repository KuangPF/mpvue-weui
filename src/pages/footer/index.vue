<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Footer</div>
      <div class="page__desc">页脚</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="weui-footer">
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>

      <div class="weui-footer">
        <div class="weui-footer__links">
          <navigator url="" class="weui-footer__link">底部链接</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>

      <div class="weui-footer">
        <div class="weui-footer__links">
          <navigator url="" class="weui-footer__link">底部链接</navigator>
          <navigator url="" class="weui-footer__link">底部链接</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2016 weui.io</div>
      </div>

      <div class="weui-footer weui-footer_fixed-bottom">
        <div class="weui-footer__links">
          <navigator url="" class="weui-footer__link">WeUI首页</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 作为展示用的样式 */

.weui-footer {
  margin-bottom: 50px;
}
.weui-footer_fixed-bottom {
  margin-bottom: 0;
}
</style>
