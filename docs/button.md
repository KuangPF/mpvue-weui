# Button
按钮

?> 在 `mpvue` 框架中，`Button`的各个属性完美支持，在某些写法上略有不同。主要涉及到的类型是 `Handler`的属性。

!> `bindgetuserinfo` 要写成 `@getuserinfo`，`bindcontact` 要写成 `@contact`，`bindgetphonenumber` 要写成 `@getphonenumber`，`binderrror` 要写成 `@errror`。

!> 对于一些回调函数，比如`getuserinfo`,在原生小程序中，获取信息为：`e.detail`,但在`mpvue`中，获取方式为：`e.mp.detail`。
### size
* 类型： String
* 默认值： default
* 可选值：
    * default
    * mini
* 说明：按钮的大小

### type
* 类型：String
* 默认值：default
* 可选值：
    * primary：确定
    * default：取消
    * warn：警示
* 说明：按钮的样式类型

### plain
* 类型：Boolean
* 默认值：false
* 说明：按钮是否镂空，背景色透明

### disabled
* 类型：Boolean
* 默认值：false
* 说明：是否禁用

### loading
* 类型：Boolean
* 默认值：false
* 说明：名称前是否带 loading 图标

### form-type
* 类型：String
* 默认值：无
* 可选值：
    * submit：提交表
    * reset：重置表单
* 说明：用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件

### open-type
* 类型：String
* 默认值：无
* 可选值：
    * contact：打开客服会话
    * share：触发用户转发
    * getUserInfo：获取用户信息，可以从`bindgetuserinfo`回调中获取到用户信息
    * getPhoneNumber: 获取用户手机号，可以从`bindgetphonenumber`回调中获取到用户信息
    * launchApp:打开APP，可以通过app-parameter属性设定向APP传的参数具体说明
* 说明：微信开放能力

### app-parameter
* 类型：String
* 默认值：无
* 说明：打开 APP 时，向 APP 传递的参数

### hover-class
* 类型：String
* 默认值：button-hover
* 可选值：自定义类名
* 说明：指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果

### hover-start-time
* 类型：Number
* 默认值：20
* 可选值：
* 说明：按住后多久出现点击态，单位毫秒

### hover-stay-time
* 类型：Number
* 默认值：70
* 可选值：
* 说明：手指松开后点击态保留时间，单位毫秒

### bindgetuserinfo
* 类型：Handler
* 默认值：无
* 可选值：
* 说明：用户点击该按钮时，会返回获取到的用户信息，从返回参数的`mp.detail`中获取到的值同`wx.getUserInfo`

### lang
* 类型：Number
* 默认值：en
* 可选值：
    * zh_CN ：简体中文
    * zh_TW：繁体中文
    * en ：英文
* 说明：手指松开后点击态保留时间，单位毫秒

### session-from
* 类型：String
* 默认值：无
* 说明：会话来源

### send-message-path
* 类型：String
* 默认值：当前分享路径
* 可选值：小程序的页面路径
* 说明：会话内消息卡片点击跳转小程序路径

### send-message-img
* 类型：String
* 默认值：截图
* 可选值：图片的路径
* 说明：会话内消息卡片图片

### show-message-card
* 类型：Boolean
* 默认值：false
* 可选值：
    * false
    * true
* 说明：显示会话内消息卡片

### bindcontact
* 类型：Handler
* 默认值：无
* 说明：客服消息回调

### bindgetphonenumber
* 类型：Handler
* 默认值：无
* 说明：获取用户手机号回调

### binderrror
* 类型：Handler
* 默认值：无
* 说明：当使用开放能力时，发生错误的回调


