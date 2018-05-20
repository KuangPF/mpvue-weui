<template>
  <div class="page">
    vuexPageB
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  mounted() {
    console.log(this.userinfo);
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
