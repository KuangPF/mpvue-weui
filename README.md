# [mpvue-weui](https://kuangpf.github.io/mpvue-weui/#/)

> 用 vue 写小程序，使用 mpvue 框架重写 WeUI。

![GitHub package version](https://img.shields.io/github/package-json/v/KuangPF/mpvue-weui.svg) ![Build](https://img.shields.io/circleci/project/github/KuangPF/mpvue-weui/master.svg) ![GitHub rep size](https://img.shields.io/github/languages/code-size/KuangPF/mpvue-weui.svg) ![license](https://img.shields.io/github/license/KuangPF/mpvue-weui.svg)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKuangPF%2Fmpvue-weui.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FKuangPF%2Fmpvue-weui?ref=badge_shield)

### 相关说明

该仓库是基于 `mpvue` 重写 `WeUI`，是一个 `demo` 库，没有实现组件化，目前 [MPComponent/mpvue-weui](https://github.com/MPComponent/mpvue-weui) 已实现组件化，支持 `npm` 安装。

### 前言

今天早上打开电脑，像往常一样浏览一下 `github`，看到了一个很不错的框架，没错，就是 [mpvue](https://github.com/Meituan-Dianping/mpvue)。它是基于 `Vue.js` 的小程序开发框架，从底层支持 `Vue.js` 语法和构建工具体系。what，小程序可以用 `vue`写了？简直有点不太敢确定，花了[5 分钟](http://mpvue.com/mpvue/quickstart/)看了一下简介，没错，真的可以用`vue`开发小程序。真的是\*\*限制了我的想象力，明白又该学写了，于是就开始准备利用这个框架写一点项目，感受一下他的魅力(其实是踩坑)。

### 踩坑文档

[记录了踩的一些坑和一些组件在 `mpvue` 框架中的用法](https://kuangpf.github.io/mpvue-weui/#/)

### WeUI

由于是小程序，所以首先想到了实现一下小程序的一些组件，包括 button、loading、picker 等等。总的效果就像[weui](https://weui.io/)，或者说用 vue 重写[weui](https://weui.io/)。

### 开发预览

```bash
1. git clone
git clone https://github.com/KuangPF/wxapp-vue.git

2. 安装依赖
npm install

3. 启动程序
npm run dev

4. 预览
打开微信开发者工具，新建项目，将目录指向 /dist 即可
```

### 效果


<img width="390" alt="mpvue-weui-demo01" src="https://user-images.githubusercontent.com/20694238/66197896-e23f6380-e6cd-11e9-99bc-b120bbc81cee.png"> <img width="390" alt="mpvue-weui-demo02" src="https://user-images.githubusercontent.com/20694238/66197895-e1a6cd00-e6cd-11e9-8c82-d3974c1cc0ce.png">

<img width="390" alt="mpvue-weui-demo03" src="https://user-images.githubusercontent.com/20694238/66197894-e10e3680-e6cd-11e9-8db4-f167abe07efc.png"> <img width="390" alt="mpvue-weui-demo04" src="https://user-images.githubusercontent.com/20694238/66197893-e10e3680-e6cd-11e9-9391-0962a9c84389.png">


### 重写状态

<details>
<summary>点击展开重写状态</summary>

#### 表单

* [x] Button
* [x] Input
* [x] List
* [x] Slide-View
* [x] Slider
* [x] Uploader

#### 基础组件

* [x] Article
* [x] Badge
* [x] Flex
* [x] Footer
* [x] Gallery
* [x] Grid
* [x] Icons
* [x] Loading
* [x] Loadmore
* [x] Panel
* [x] Preview
* [x] Progress
* [x] Swiper

#### 操作反馈

* [x] Actionsheet
* [x] Dialog
* [x] Half-Screen-Dialog
* [x] Msg
* [x] Picker
* [x] Toast

#### 导航相关

* [x] Navbar
* [x] Navigation-Bar
* [x] Tabbar

#### 搜索相关

* [x] Searchbar

#### Issues 相关

* [x] Request
* [x] 页面通信（Vuex 实现）
* [x] Rate

</details>

### 版本日志
[releases](https://github.com/KuangPF/mpvue-weui/releases)

### Contributors

Thank you to all the people who already contributed to mpvue-weui. <img src="https://opencollective.com/mpvue-weui/contributors.svg?width=890&button=false" />

### 结束语

花了大概一周多的时间来完成了这个项目，过程中收获还是很大的，给我最大的感触就是现在技术发展的很快，如果不学习就真的要落后了。美团开源的[mpvue](https://github.com/Meituan-Dianping/mpvue)是一个非常不错的框架，而且开发者也正在快速的迭代，开发新的功能，所以它的前景是非常值得期待。另外就是非常感谢关注这个仓库的人，谢谢你们的支持，后续我也会继续维护这个仓库，当`mpvue`有了一些新的特性或者一些新的语法的时候也会持续更新。如果各位大佬发现了什么问题欢迎`PR` 或者 `Issues`。

文档是用 [docsify](https://github.com/QingWei-Li/docsify/)构建，所有文档文件在 `/docs` 目录下面，由于里面图片比较多而且还有`gif`，可能在`git clone`的时候会有一点点慢。

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKuangPF%2Fmpvue-weui.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FKuangPF%2Fmpvue-weui?ref=badge_large)

### 持续维护...
