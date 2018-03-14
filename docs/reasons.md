# 踩坑原因总结

其实在重写  `WeUI` 的过程中，主要是重写了一些组件，可能还没有遇到 `mpvue` 框架关于数据交互以及其他方面的问题，因此主要踩了两个坑，在下面声明一下：

## 1. 小程序原生组件事件绑定的写法

先举一个简单的例子，在小程序的原生组件中有 `checkbox-group`,`picker`,`slider`等等，以`picker`组件为例，它有一个类型为 `EventHandle` 的 `bindchange` 属性，在小程序中的写法为:

``` javascript
<picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindDateChange">
  <view class="picker">
    当前选择: {{date}}
  </view>
</picker>
```

但如果在 `mpvue` 中这样写的话，是不起作用的，而正确的写法是：

``` vue
<picker class="weui-btn" mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
  <button type="default">日期选择器</button>
</picker>
```

从中可以看出两点要避免踩坑的：

!> 1. 对于一在小程序组件中为 `Handler`或者为`EventHandle` 的属性，在 `mpvue` 框架中要写成 `vue` 的事件绑定形式,就像:`bindchange`写成`@change`

!> 2. 对于一些在小程序中绑定值的属性，例如上面 `picker` 组件中的 `value`，在 `mpvue` 框架中要写成 `:value="date"`


## 2. 触发事件取值问题

还是举个简单的例子，`slider`组件有一个`bindchange`属性，它是完成一次拖动后触发的事件，那么如果我们想取对应的值该怎么操作。
在小程序中：
``` javascript
event.detail = {value: value}
```
但在 `mpvue`中要这样写：

 ``` vue
 event.mp.detail = {value: value}
 ```
 从中可以很明显地看出区别，因此要避免踩的坑：

!> 在触发事件后如果要获取对应的值，需要写成这样: `e.detail.value`


