<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Input</div>
      <div class="page__desc">表单输入</div>
    </div>

    <div class="page__bd">
      <div class="weui-toptips weui-toptips_warn" v-if="showTopTips">错误提示</div>
      <div class="weui-cells__title">单选列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <radio-group bindchange="radioChange">
          <label class="weui-cell weui-check__label" v-for="item in radioItems" :key="index">
            <radio class="weui-check" value="item.value" checked="item.checked" />
            <div class="weui-cell__bd">{{item.name}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
              <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
            </div>
          </label>
        </radio-group>
        <div class="weui-cell weui-cell_link">
          <div class="weui-cell__bd">添加更多</div>
        </div>
      </div>
      <div class="weui-cells__title">复选列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <checkbox-group @bindchange="checkboxChange">
          <label class="weui-cell weui-check__label" v-for="item in checkboxItems" :key="index">
            <checkbox class="weui-check" value="item.value" checked="item.checked" />

            <div class="weui-cell__hd weui-check__hd_in-checkbox">
              <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon>
              <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon>
            </div>
            <div class="weui-cell__bd">{{item.name}}</div>
          </label>
        </checkbox-group>
        <div class="weui-cell weui-cell_link">
          <div class="weui-cell__bd">添加更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopTips: false,

      radioItems: [
        { name: 'cell standard', value: '0' },
        { name: 'cell standard', value: '1', checked: true }
      ],
      checkboxItems: [
        { name: 'standard is dealt for u.', value: '0', checked: true },
        { name: 'standard is dealicient for u.', value: '1' }
      ],
    }
  },
  methods: {
    checkboxChange(e) {
      console.log(e);
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      var checkboxItems = this.checkboxItems, values = e.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.checkboxItems = checkboxItems
    }
  }
}
</script>

<style>

</style>
