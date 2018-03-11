<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">List</div>
      <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
      <div class="weui-cells__title">带说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">标题文字</div>
          <div class="weui-cell__ft">说明文字</div>
        </div>
      </div>

      <div class="weui-cells__title">带图标、说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">标题文字</div>
          <div class="weui-cell__ft">说明文字</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">标题文字</div>
          <div class="weui-cell__ft">说明文字</div>
        </div>
      </div>

      <div class="weui-cells__title">带跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>

      <div class="weui-cells__title">带说明、跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">说明文字</div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">说明文字</div>
        </navigator>
      </div>

      <div class="weui-cells__title">带图标、说明、跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">说明文字</div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">说明文字</div>
        </navigator>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import base64 from '../../../static/images/base64';
export default {
  data() {
    return {
      icon: ''
    }
  },
  mounted() {
    this.icon = base64.icon20;
  }
}

</script>
<style>

</style>
