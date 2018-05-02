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
                    <image class="weui-grid__icon" :src="item.src" />
                    <div class="weui-grid__label">{{item.name}}</div>
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
      grids: [
        { src: '/static/images/icon_nav_button.png', name: 'Button' },
        { src: '/static/images/icon_nav_cell.png', name: 'Cell' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg' },
        { src: '/static/images/icon_nav_article.png', name: 'Article' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons' }
      ]
    }
  }
}
</script>

<style>

</style>
