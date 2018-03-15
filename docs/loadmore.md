# Loadmore
加载更多

`Loadmore`用于实现加载更多的效果，使用比较简单，加上相关的 class 就可以实现这种效果，示例代码如下：

``` vue
<template>
  <div class="page">
    <div class="weui-loadmore">
      <div class="weui-loading"></div>
      <div class="weui-loadmore__tips">正在加载</div>
    </div>
    <div class="weui-loadmore weui-loadmore_line">
      <div class="weui-loadmore__tips weui-loadmore__tips_in-line">暂无数据</div>
    </div>
    <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">
      <div class="weui-loadmore__tips weui-loadmore__tips_in-line weui-loadmore__tips_in-dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>

```

**效果**

![loadmore](_img/loadmore01.png)
