<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">页面通讯管理</div>
      <div class="page__desc">利用 vuex 实现数据的整理</div>
    </div>
    <div class="page__bd">
      <button type="primary" @click="turnToVuexPage">点击跳转</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  mounted() {
    this.setuserinfo();
    console.log(this.$store);
    console.log(this.userinfo);
  },
  methods: {
    ...mapMutations({
      setuserinfoVuex: 'SET_USERINFO'
    }),
    setuserinfo() {
      let vueTest = {
        name: 'mpvueTest'
      }
      this.setuserinfoVuex(vueTest);
    },
    turnToVuexPage() {
      wx.navigateTo({
        url: '/pages/vuexPage/vuexPage'
      })
    }
  },
  computed: {
    ...mapGetters([
      'userinfo'
    ])
  }
}
</script>

<style>
</style>
