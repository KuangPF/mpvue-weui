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
        <radio-group @change="radioChange">
          <label class="weui-cell weui-check__label" v-for="item in radioItems" :key="index">
            <radio class="weui-check" :value="item.value" :checked="item.checked" />
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
        <checkbox-group @change="checkboxChange">
      <label class="weui-cell weui-check__label" v-for="item in checkboxItems" :key="index">
        <checkbox class="weui-check" :value="item.value" :checked="item.checked" />
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

      <div class="weui-cells__title">表单</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">qq</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入qq" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">手机号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入手机号" />
          </div>
          <div class="weui-cell__ft">
            <div class="weui-vcode-btn">获取验证码</div>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">日期</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="date" value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
              <div class="weui-input">{{date}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">时间</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="time" value="time" start="09:01" end="21:01" @change="bindTimeChange">
              <div class="weui-input">{{time}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">验证码</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入验证码" />
          </div>
          <div class="weui-cell__ft">
            <image class="weui-vcode-img" src="/static/images/vcode.jpg" style="width: 108px"></image>
          </div>
        </div>
      </div>

      <div class="weui-cells__tips">底部说明文字底部说明文字</div>

      <div class="weui-cells__title">表单报错</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input weui-cell_warn">
          <div class="weui-cell__hd">
            <div class="weui-label">卡号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入卡号" />
          </div>
          <div class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">开关</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">标题文字</div>
          <div class="weui-cell__ft">
            <switch checked @change = "switchChange"/>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">文本框</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入文本" />
          </div>
        </div>
      </div>

      <div class="weui-cells__title">文本域</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea class="" placeholder="请输入文本" style="height: 3.3em" />
            <div class="weui-textarea-counter">0/200</div>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd" style="width: 105px;padding-left:0">
            <picker @change="bindCountryCodeChange" :range="countryCodes">
              <div class="weui-select">{{countryCodes[countryCodesIndex]}}</div>
            </picker>
          </div>
          <div class="weui-cell__bd weui-cell__bd_in-select-before">
            <input class="weui-input" placeholder="请输入号码" />
          </div>
        </div>
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__bd">
            <picker @change="bindAccountChange" :range="accounts">
              <div class="weui-select">{{accounts[accountsIndex]}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd weui-cell__hd_in-select-after">
            <div class="weui-label">国家/地区</div>
          </div>
          <div class="weui-cell__bd">
            <picker @change="bindCountryChange" :range="countries">
              <div class="weui-select weui-select_in-select-after">{{countries[countryIndex]}}</div>
            </picker>
          </div>
        </div>
      </div>

      <checkbox-group @click="bindAgreeChange">
        <label class="weui-agree" for="weuiAgree">
          <div class="weui-agree__text">
            <checkbox class="weui-agree__checkbox" id="weuiAgree" value="agree" checked="isAgree" />
            <div class="weui-agree__checkbox-icon">
              <icon class="weui-agree__checkbox-icon-check" type="success_no_circle" size="9" v-if="isAgree"></icon>
            </div>
            阅读并同意
            <navigator url="" class="weui-agree__link">《相关条款》</navigator>
          </div>
        </label>
      </checkbox-group>

      <div class="weui-btn-area">
        <button class="weui-btn" type="primary" @click="showTopTipsFun">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopTips: false,
      time: '09:01',
      date: '2015-09-01',
      countryCodes: ["+86", "+80", "+84", "+87"],
      countryCodesIndex: 0,
      countries: ["中国", "美国", "英国"],
      countryIndex: 0,
      accounts: ["微信号", "QQ", "Email"],
      accountsIndex: 0,

      radioItems: [
        { name: 'cell standard', value: '0' },
        { name: 'cell standard', value: '1', checked: true }
      ],
      checkboxItems: [
        { name: 'standard is dealt for u.', value: '0', checked: true },
        { name: 'standard is dealicient for u.', value: '1', checked: false }
      ],

      isAgree: false
    }
  },
  methods: {
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value);
      var checkboxItems = this.checkboxItems, values = e.mp.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.checkboxItems = checkboxItems;
    },
    radioChange(e) {
      console.log('radio发生change事件，携带value值为：' + e.mp.detail.value);
      let radioItems = this.radioItems;
      for (let i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value;
      }
      this.radioItems = radioItems;
    },
    switchChange(e) {
      console.log("switch发生change事件，携带value值为："+ e.mp.detail.value);
    },
    bindDateChange(e) {
      this.date = e.mp.detail.value;
      console.log(e.mp.detail.value);
    },
    bindTimeChange(e) {
      this.time = e.mp.detail.value;
      console.log(e.mp.detail.value);
    },
    showTopTipsFun() {
      this.showTopTips = true;
      setTimeout(() => {
        this.showTopTips = false;
      }, 2000)
    },

    bindCountryChange(e) {
      this.countryIndex = e.mp.detail.value;
    },
    bindAccountChange(e) {
      this.accountsIndex = e.mp.detail.value;
    },
    bindCountryCodeChange(e) {
      this.countryCodesIndex = e.mp.detail.value;
    },
    bindAgreeChange(e) {
      this.isAgree = !this.isAgree;
    }
  }
}
</script>

<style>

</style>
