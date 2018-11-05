# [mpvue-weui](https://kuangpf.github.io/mpvue-weui/#/)

> 用 vue 写小程序，使用 mpvue 框架重写 WeUI。

![GitHub package version](https://img.shields.io/github/package-json/v/KuangPF/mpvue-weui.svg) ![Github release version](https://img.shields.io/github/release/KuangPF/mpvue-weui.svg) ![node](https://img.shields.io/node/v/passport.svg) ![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/KuangPF/mpvue-weui.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/KuangPF/mpvue-weui.svg) ![GitHub rep size](https://img.shields.io/github/languages/code-size/KuangPF/mpvue-weui.svg)
[![Backers on Open Collective](https://opencollective.com/mpvue-weui/backers/badge.svg)](#backers) 
[![Sponsors on Open Collective](https://opencollective.com/mpvue-weui/sponsors/badge.svg)](#sponsors) 

### 相关说明

该仓库是基于 `mpvue` 重写 `WeUI`，是一个 `demo` 库，没有实现组件化，目前 [MPComponent/mpvue-weui](https://github.com/MPComponent/mpvue-weui) 已实现组件化，支持 `npm` 安装。

### 前言

今天早上打开电脑，像往常一样浏览一下 `github`，看到了一个很不错的框架，没错，就是 [mpvue](https://github.com/Meituan-Dianping/mpvue)。它是基于 `Vue.js` 的小程序开发框架，从底层支持 `Vue.js` 语法和构建工具体系。what，小程序可以用 `vue`写了？简直有点不太敢确定，花了[5分钟](http://mpvue.com/mpvue/quickstart/)看了一下简介，没错，真的可以用`vue`开发小程序。真的是**限制了我的想象力，明白又该学写了，于是就开始准备利用这个框架写一点项目，感受一下他的魅力(其实是踩坑)。


### 踩坑文档

[记录了踩的一些坑和一些组件在 `mpvue` 框架中的用法](https://kuangpf.github.io/mpvue-weui/#/)


### WeUI

由于是小程序，所以首先想到了实现一下小程序的一些组件，包括 button、loading、picker 等等。总的效果就像[weui](https://weui.io/)，或者说用 vue 重写[weui](https://weui.io/)。

### 开发预览

``` bash
1. git clone
git clone https://github.com/KuangPF/wxapp-vue.git

2. 安装依赖
npm install (cnpm install)

3. 启动程序
npm run dev

4. 预览
打开微信开发者工具，新建项目，将目录指向 /dist 即可

```
### 效果

![mpvue-weui-demo01](https://github.com/KuangPF/mpvue-weui/blob/master/static/demo/mpvue-weui-demo01.png)
![mpvue-weui-demo02](https://github.com/KuangPF/mpvue-weui/blob/master/static/demo/mpvue-weui-demo02.png)
![mpvue-weui-demo03](https://github.com/KuangPF/mpvue-weui/blob/master/static/demo/mpvue-weui-demo03.png)
![mpvue-weui-demo01](https://github.com/KuangPF/mpvue-weui/blob/master/static/demo/mpvue-weui-demo04.png)

### 重写状态


<details>
<summary>点击展开重写状态</summary>

#### 表单
- [x] Button
- [x] Input
- [x] List
- [x] Slider
- [x] Uploader

#### 基础组件
- [x] Article
- [x] Badge
- [x] Flex
- [x] Footer
- [x] Gallery
- [x] Grid
- [x] Icons
- [x] Loadmore
- [x] Panel
- [x] Preview
- [x] Progress
- [x] Swiper

#### 操作反馈
- [x] Actionsheet
- [x] Dialog
- [x] Msg
- [x] Picker
- [x] Toast

#### 导航相关
- [x] Navbar
- [x] Tabbar

#### 搜索相关
- [x] Searchbar

#### Issues 相关
- [x] Request
- [x] 页面通信（Vuex 实现）
- [x] Rate

</details>

### 版本日志

#### v1.0.5
* 基于 `mpvue 1.0.12`
* 增加星级评分

#### v1.0.4
* 基于 `mpvue 1.0.12`
* 增加页面通讯案例（vuex 实现）

#### v1.0.3
* 基于 `mpvue 1.0.9`
* 增加网络请求实例

#### v1.0.2
* 基于 `mpvue 1.0.7`
* `uploader`组件增加删除功能

#### v1.0.1
* 基于 `mpvue 1.0.7`
* 增加`swiper`组件

#### v1.0.0
* 基于 `mpvue 1.0.5`
* 完成 `WeUI` 重写和文档编写

### 结束语
花了大概一周多的时间来完成了这个项目，过程中收获还是很大的，给我最大的感触就是现在技术发展的很快，如果不学习就真的要落后了。美团开源的[mpvue](https://github.com/Meituan-Dianping/mpvue)是一个非常不错的框架，而且开发者也正在快速的迭代，开发新的功能，所以它的前景是非常值得期待。另外就是非常感谢关注这个仓库的人，谢谢你们的支持，后续我也会继续维护这个仓库，当`mpvue`有了一些新的特性或者一些新的语法的时候也会持续更新。如果各位大佬发现了什么问题欢迎`PR` 或者 `Issues`。

文档是用 [docsify](https://github.com/QingWei-Li/docsify/)构建，所有文档文件在 `/docs` 目录下面，由于里面图片比较多而且还有`gif`，可能在`git clone`的时候会有一点点慢。

### 持续维护...

## Contributors

This project exists thanks to all the people who contribute. <img src="https://opencollective.com/mpvue-weui/contributors.svg?width=890&button=false" />


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/mpvue-weui#backer)]

<a href="https://opencollective.com/mpvue-weui#backers" target="_blank"><img src="https://opencollective.com/mpvue-weui/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/mpvue-weui#sponsor)]

<a href="https://opencollective.com/mpvue-weui/sponsor/0/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/1/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/2/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/3/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/4/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/5/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/6/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/7/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/8/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/mpvue-weui/sponsor/9/website" target="_blank"><img src="https://opencollective.com/mpvue-weui/sponsor/9/avatar.svg"></a>


