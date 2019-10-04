<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Tabbar</div>
      <div class="page__desc">底部导航，建议采用小程序原生的tabbar，通过设置page/main.js（即对应小程序中app.json）来实现。详情请看小程序文档。</div>
    </div>
    <div class="page__bd">
      <div class="weui-tabbar">
        <div class="weui-tabbar__item weui-bar__item_on">
          <div style="position: relative;display:inline-block;">
            <img src="/static/images/pic_160.png" class="weui-tabbar__icon" />
          </div>
          <div class="weui-tabbar__label">标题</div>
        </div>
        <div class="weui-tabbar__item">
          <div style="position: relative;display:inline-block;">
            <img src="/static/images/pic_160.png" class="weui-tabbar__icon" />
            <div
              class="weui-badge weui-badge_dot"
              style="position:absolute;top:-2px;left:calc(100% - 3px);"
            ></div>
          </div>
          <div class="weui-tabbar__label">标题</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
