# Icons
图标

在 `mpvue` 框架使用 `icon` 组件就能实现这个功能，该组件有以下属性：

### type
* 类型：String
* 默认值：无
* 可选值：
  * success
  * success_no_circle
  * info
  * warn
  * waiting
  * cancel
  * download
  * search
  * clear
* 说明：icon的类型

### size
* 类型：Number
* 默认值：23
* 可选值：
* 说明：icon的类型

### color
* 类型：Color
* 默认值：无
* 可选值：
* 说明：icon的颜色，同css的color

本示例是基于 `mpvue` 重写了官网 icon 的例子,示例代码如下：

``` vue
<template>
  <div class="page">
    <div class="group weui-flex">
      <div v-for="item in iconSize">
        <icon type="success" class="weui-flex__item" :size="item" />
      </div>
    </div>

    <div class="group weui-flex">
      <div v-for="item in iconType">
        <icon :type="item"class="weui-flex__item" size="40" />
      </div>
    </div>

    <div class="group weui-flex">
      <div v-for="item in iconColor">
        <icon type="success" class="weui-flex__item" size="40" :color="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconSize: [20, 30, 40, 50, 60, 70],
      iconColor: [
        'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
      ],
      iconType: [
        'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
.group {
  margin-top: 50px;
}
</style>

```

**效果**

![icons01](_img/icons01.png)