<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div
              :id="index"
              :class="['weui-navbar__item', activeIndex === index ? 'weui-bar__item_on' : '']"
              @click="tabClick"
            >
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">选项一的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">选项三的内容</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabs: ['选项一', '选项二', '选项三'],
      activeIndex: 0
    }
  },
  methods: {
    tabClick(e) {
      console.log(e);
      this.activeIndex = Number(e.currentTarget.id);
    }
  }
}
</script>

<style scoped>
page,
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-navbar__title {
  display: block;
}
.weui-tab__content {
  padding-top: 60px;
  text-align: center;
}
</style>
