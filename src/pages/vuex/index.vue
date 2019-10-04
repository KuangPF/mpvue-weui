<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">页面通讯</div>
      <div class="page__desc">利用 vuex 实现数据的管理</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <button class="weui-btn mini-btn" type="primary" size="mini" @click="getMpvueInfo">点击显示 state => mpvueInfo</button>
      <button class="weui-btn mini-btn" type="warn" size="mini" @click="commitMpvueInfo">点击更新 state => mpvueInfo</button>
      <div class="mpvueInfo-desc" v-show="showMpvueInfo">{{mpvueInfo}}</div>
      <button type="primary" class="mt-15" @click="turnToVuexPage">点击跳转</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      stateMpvueInfo: '',
      showMpvueInfo: false
    }
  },
  mounted() {
    console.log(this.mpvueInfo);
  },
  methods: {
    ...mapMutations({
      setMpvueInfoVuex: 'SET_MPVUEINFO'
    }),
    turnToVuexPage() {
      wx.navigateTo({
        url: '/pages/vuex-page/main'
      })
    },
    getMpvueInfo() {
      this.showMpvueInfo = true;
    },
    commitMpvueInfo() {
      let mpvueInfoUpate = '基于 Vue.js 的小程序开发框架，从底层支持 Vue.js 语法和构建工具体系。---created by 美团点评'
      this.setMpvueInfoVuex(mpvueInfoUpate);
    }
  },
  computed: {
    ...mapGetters([
      'mpvueInfo'
    ])
  }
}
</script>

<style>
.mpvueInfo-desc {
  margin-top: 15px;
  font-size: 18px;
  color: #333;
  text-align: justify;
  word-break: break-all;
}
.mt-15 {
  margin-top: 15px;
}
</style>
