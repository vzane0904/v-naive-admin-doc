---
title: 介绍
icon: markdown
order: 11
category:
  - 使用指南
tag:
  - 介绍
---

## 项目介绍

V-Naive-Admin 是一个免费开源的中后台模版,使用了最新的 [Vue3](https://cn.vuejs.org/) 、[Vite2](https://cn.vitejs.dev/) 、[TypeScript](https://www.tslang.cn/) 、[Pinia](https://pinia.web3doc.top/) 、[Naive UI](https://www.naiveui.com/zh-CN/light)等主流技术开发，开箱即用的中后台前端解决方案，本人是第一次写开源项目，也处于一个学习阶段，代码可能写的不太优雅，如果您对我的代码有更好的建议也希望您能提出宝贵的一键，我会虚心去学习 谢谢.

## 文档

- 中文文档地址为 [v-naive-admin-doc](https://github.com/zane0904/v-naive-admin-doc)，采用开源 [vuepress-theme-hope](https://vuepress-theme-hope.github.io/) 开发。如发现文档有误，欢迎提 pr 帮助我们改进。

- 英文文档暂时没有时间来写，欢迎同学毛遂自荐来帮忙写英文文档。

## 在本地运行文档


::: tip 如需本地运行文档，需拉取代码到本地。

```shell
# 拉取代码
git clone https://github.com/zane0904/v-naive-admin-doc

cd ./v-naive-admin-doc

# 安装依赖

pnpm run bootstrap

# 运行项目
pnpm run docs:dev
```
:::

## 需要具备的基础知识

需要一定的前端基础知识包括不限于 HTML、css、js、Vue 如果您具备这些基础那么很容易上手开发

- [Vue3](https://cn.vuejs.org/)
- [Axios]()
- [Pinia](https://pinia.web3doc.top/)
- [Vue-router](https://router.vuejs.org/zh/)
- [Naive-UI](https://www.naiveui.com/zh-CN/light)
- [Es6+](https://es6.ruanyifeng.com/)
- [TypeScript](https://www.tslang.cn/)
- [WindiCss](https://cn.windicss.org/)
- [Mock.js](http://mockjs.com/)
- [Vitejs](https://cn.vitejs.d)

## 浏览器支持

本地开发推荐使用 `Chrome 最新版` 浏览器,不支持 `Chrome 80` 以下版本。

支持现代浏览器, 不支持 IE

| ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png)<br/>IE | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)<br/>Edge | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)<br/>Firefox | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)<br/>Chrome | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)<br/>Safari |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| not support| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 相关仓库

如果这些插件对您有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - 用于本地及开发环境数据 mock
- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html) - 用于 html 模版转换及压缩
- [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-theme](https://github.com/anncwb/vite-plugin-theme) - 用于在线切换主题色等颜色相关配置
- [vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression) - 用于打包输出.gz|.brotil 文件
- [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons) - 用于快速生成 svg 雪碧图
- [unplugin-vue-components/vite](https://github.com/antfu/unplugin-vue-components) - 自动引入组件插件 省去 UI 库的大量 import 语句
- [unplugin-auto-import/vite](https://github.com/antfu/unplugin-auto-import) - 自动导入插件 Api 省去 UI 库的大量 import 语句
- [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) - rollup 打包体积分析插件

## 安全

[![OSCS Status](https://www.oscs1024.com/platform/badge/zane0904/v-naive-admin.svg?size=small)](https://www.murphysec.com/dr/1vtzlp7pg8nXvdUE47)

安全是一个开源项目重中之重，为此我们已接入 [oscs 墨菲安全扫描](https://www.murphysec.com/dr/1vtzlp7pg8nXvdUE47) ，Admin 源码中未被扫描出任何风险项，超越 100%的项目，确保人畜无害！大家可以放心使用(我们会不定期对项目进行安全扫描)，当然您如果扔不放心，我们推荐您在使用前 clone admin 源码亲自阅读一番，我们是 100%开源，是否有风险您一看便知.

## 加入我们

- [V-Naive-Admin](https://github.com/zane0904/v-naive-admin) 还在持续更新中，欢迎您的加入，共同维护，逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。
- 如果您想加入我们，可以多提供一些好的建议或者提交 pr，我们会根据您的活跃度邀请您加入。

## License

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

[MIT © VNaive-20222](./LICENSE)

此项目可免费用于商业用途，请遵守 MIT 协议并保留作者技术支持声明.