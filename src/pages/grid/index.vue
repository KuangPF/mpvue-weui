<template>
  <div class="page">
    <div class="page__hd">
        <div class="page__title">Grid</div>
        <div class="page__desc">九宫格</div>
    </div>
    <div class="page__bd">
        <div class="weui-grids">
            <block v-for="item in grids" :key="index">
                <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                    <image class="weui-grid__icon" src="../../../static/images/icon_tabbar.png" />
                    <div class="weui-grid__label">Grid</div>
                </navigator>
            </block>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      grids: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<style>

</style>
