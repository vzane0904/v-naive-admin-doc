---
title: 开始
icon: markdown
order: 2
category:
  - 使用指南
tag:
  - start
---

帮助你从0开始启动项目

## 环境准备

::: warning 注意
 - 推荐使用[Nvm](https://github.com/nvm-sh/nvm)管理Node.js版本
 - [Node.js](https://nodejs.org/en/)推荐16.14+
 - [Git](https://git-scm.com/)
 - [pnpm 7.0+](https://pnpm.io/zh/installation)
::: 

## 开发工具
 ::: info 推荐使用vscode(可以安装以下插件提高开发效率)
 - [Naive Ui Snippets ](https://marketplace.visualstudio.com/items?itemName=JimDong.naive-ui-snippets) Naive-UI 组件库组件提示插件
 - [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) windicss 代码提示插件
 - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) 多语言配置插件
 - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) Vue3代码提示插件
 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 代码检查
 - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 代码格式化
 - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)  css 格式化
 - [ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env) 环境配置文件代码高亮
::: 

## 获取代码

 ::: warning 注意
 存放代码的目录不能存在非英文，否则安装依赖或启动时会出错。

 :::
 ### GitHub 获取代码
 ```shell
git clone https://github.com/zane0904/v-naive-admin-doc
```
## 安装
### 安装Node.js
请先确保您电脑已安装[Node.js](https://nodejs.org/en/)

验证
``` shell
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v
```

:::  tip 建议
如果您需要开发多个项目，且 Node 版本不一致的情况下，建议您使用 [Nvm](https://github.com/nvm-sh/nvm) 管理Node版本
::: 

### pnpm安装

推荐使用 [pnpm](https://pnpm.io/zh/installation) 进行依赖安装，暂未测试使用(npm、cnpm、yarn)等包管理器安装依赖，若安装依赖失败需要自行处理

如果未安装 [pnpm](https://pnpm.io/zh/installation)，可以用下面命令来进行全局安装

``` shell
# 全局安装 pnpm
npm install pnpm -g
# 验证
pnpm -v # 出现对应版本号即代表安装成功
# 设置源
pnpm config get registry # 查看源
# 切换淘宝源
pnpm config set registry https://registry.npmmirror.com
# npm设置回本源
pnpm config set registry https://registry.npmjs.org
```

### 安装依赖

进入项目根目录下，打开命令窗口执行，运行下列命令，等待安装完成即可

```shell
# 安装依赖
pnpm run bootstrap
```

::: warning 安装依赖时 husky 安装失败
请查看你的源码是否从 github 直接下载的，直接下载是没有 .git 文件夹的，而 husky 需要依赖 git 才能安装。需要您手动执行 git init 初始化项目，再尝试重新安装即可
:::
### npm scripts

```shell
  "scripts": {
    # 安装依赖
    "bootstrap": "pnpm install && pnpm run prepare",
    # 运行项目
    "dev": "vite",
    # 构建项目
    "build": "vite build",
    # 预览打包后的内容（必须先打包才能进行预览）
    "preview": "vite preview",
    # 读取不通环境的配置文件
    "serve:dev": "npx --max_old_space_size=4096 vite serve --mode development",
    # 读取不通环境的配置文件
    "serve:pro": "npx --max_old_space_size=4096 vite serve --mode production",
    # 执行eslit 并且只报告错误  去掉--quiet 会报告警告
    "lint": "eslint --ext src/**/*.{vue,ts,tsx} --quiet",
    # 仅检查更改过的文件 不修复错误文件
    "lint:fix": "eslint --cache --max-warnings 0 src/**/*.{vue,ts,tsx}",
    # 初始化 husky
    "prepare": "husky install",
    # 该命令会对项目 src/**/** (js,json,tsx,css,less,scss,vue,html,md) 结尾文件代码进行 prettier 格式化，谨慎执行
    "lint:prettier": "prettier --write  \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
    # stylelint 格式化
    "lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    # 执行 husky 脚本 对代码进行检查
    "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js"
  }
```