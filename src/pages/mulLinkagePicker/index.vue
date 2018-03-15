<template>
  <div class="page">
    <picker-view indicator-style="height: 50px;" style="width: 100%; height: 300px;" class="weui_picker_view" :class="{'weui_picker_view_show':pickerShow}">
      <picker-view-column>
        <div class="picker-item" v-for="item in columuOne" :key="index">{{item}}</div>
      </picker-view-column>
      <picker-view-column>
        <div class="picker-item" v-for="item in columuTwo" :key="index">{{item}}</div>
      </picker-view-column>
    </picker-view>
  </div>
</template>

<script>
import mulLinkAgeArray from '../../../static/js/mulLinkAgeArray'
export default {
  data() {
    return {
      pickerShow: true,
      mulLinkAgeArray: mulLinkAgeArray.value,
      columuOne: [],
      columuTwo: []
    }
  },
  mounted() {
    console.log(mulLinkAgeArray.value);
    this._initPicker();
  },
  methods: {
    _initPicker() {
      let _this = this;
      let mulLinkAgeArray = this.mulLinkAgeArray;
      for (let i = 0; i < mulLinkAgeArray.length; i++) {
        _this.columuOne.push(mulLinkAgeArray[i].label);
      }
    }
  }
}
</script>

<style>
page {
  margin-top: 100px;
}
.weui_picker_view {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
}
.weui_picker_view_show {
  transform: translateY(0);
}
.picker-item {
  text-align: center;
  line-height: 50px;
}
</style>
