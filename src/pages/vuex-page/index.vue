<template>
  <div class="page">
    <div class="page__bd page__bd_spacing">
      <div class="mpvueInfo-desc">{{mpvueInfo}}</div>
      <button type="primary" class="mt-15" @click="commitMpvueInfo">再次更新 state => mpvueInfo</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  mounted() {
    console.log(this.mpvueInfo);
  },
  computed: {
    ...mapGetters([
      'mpvueInfo'
    ])
  },
  methods: {
    ...mapMutations({
      setMpvueInfoVuex: 'SET_MPVUEINFO'
    }),
    commitMpvueInfo() {
      let mpvueInfoUpate = '基于 Vue.js 的小程序开发框架，从底层支持 Vue.js 语法和构建工具体系。---created by美团点评,github 地址：https://github.com/Meituan-Dianping/mpvue'
      this.setMpvueInfoVuex(mpvueInfoUpate);
    }
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
  margin-top: 30px;
}
</style>
