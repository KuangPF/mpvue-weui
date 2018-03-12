<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Icons</div>
      <div class="page__desc">图标</div>
    </div>
    <div class="page__bd">
      <div class="icon-box">
        <icon type="success" size="93"></icon>
        <div class="icon-box__ctn">
          <div class="icon-box__title">成功</div>
          <div class="icon-box__desc">用于表示操作顺利达成</div>
        </div>
      </div>
      <div class="icon-box">
        <icon type="info" size="93"></icon>
        <div class="icon-box__ctn">
          <div class="icon-box__title">提示</div>
          <div class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</div>
        </div>
      </div>
      <div class="icon-box">
        <icon type="warn" size="93" color="#FFBE00"></icon>
        <div class="icon-box__ctn">
          <div class="icon-box__title">普通警告</div>
          <div class="icon-box__desc">用于表示操作后将引起一定后果的情况</div>
        </div>
      </div>
      <div class="icon-box">
        <icon type="warn" size="93"></icon>
        <div class="icon-box__ctn">
          <div class="icon-box__title">强烈警告</div>
          <div class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</div>
        </div>
      </div>
      <div class="icon-box">
        <icon type="waiting" size="93"></icon>
        <div class="icon-box__ctn">
          <div class="icon-box__title">等待</div>
          <div class="icon-box__desc">用于表示等待</div>
        </div>
      </div>
      <div class="icon_sp_area">
        <icon type="success" size="23"></icon>
        <icon type="success_no_circle" size="23"></icon>
        <icon type="circle" size="23"></icon>
        <icon type="warn" size="23" color="#F43530"></icon>
        <icon type="download" size="23"></icon>
        <icon type="info_circle" size="23"></icon>
        <icon type="cancel" size="23"></icon>
        <icon type="search" size="20"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
icon {
  margin-right: 13px;
}
.page__bd {
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
}
.icon-box {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}
.icon-box__ctn {
  flex-shrink: 100;
}
.icon-box__title {
  font-size: 20px;
}
.icon-box__desc {
  margin-top: 6px;
  font-size: 12px;
  color: #888888;
}
.icon_sp_area {
  margin-top: 10px;
  text-align: left;
}
</style>
