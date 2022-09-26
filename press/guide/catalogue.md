---
date: 2020-01-01
---
# 目录结构

```
├─ .github # github配置
│  └─ workflows # github Actions
│     ├─ dev.yml # 开发环境配置文件
│     └─ pro.yml # 正式环境配置文件
├─ .husky 
│  ├─ _
│  │  ├─ .gitignore
│  │  └─ husky.sh
│  ├─ commit-msg # 校验commit信息是否符合项目规范
│  ├─ lintstagedrc.js # 代码提交前运行脚本
│  └─ pre-commit # 代码提交前进行代码格式验证
├─ .vscode # vscode配置
│  ├─ file-notes.json
│  └─ settings.json
├─ build # 构建配置
│  ├─ utils.ts # 处理环境变量类型
│  └─ vite
│     ├─ define
│     │  └─ index.ts # vite define 配置
│     ├─ plugin
│     │  ├─ autoComponents.ts # 自动注册 src/components 、naive-ui 组件 
│     │  ├─ autoImport.ts # 自动引入插件Api 减少手动import
│     │  ├─ buildVisualizer.ts # rollup打包分析插件
│     │  ├─ generateNaiveDts.ts # 处理 auto插件无法引入ts类型,手动处理 naive components 声明到全局
│     │  ├─ html.ts # 插入信息到html模板中
│     │  ├─ icons.ts # 自动引入icon
│     │  ├─ importImgs.ts #  自动引入图片
│     │  ├─ index.ts # 
│     │  ├─ jsx.ts # jsx处理
│     │  ├─ mock.ts # mock配置
│     │  ├─ restart.ts # 修改环境变量文件自动重启vite 此功能建议关闭，mac系统可以正常使用但是在window系统会错误,mac和window系统使用的路径符号不一致导致的 / \
│     │  └─ setupName.ts # 解决使用setup语法糖无法定义 name 问题
│     ├─ proxy.ts # 转换环境变量文件配置代理
│     └─ resolve # 
│        ├─ alias.ts # 路径别名
│        └─ index.ts # 
├─ mock # Mock配置
│  ├─ _createProductionServer.ts # 
│  ├─ config # 常用配置
│  └─ modules # 注册mock接口
├─ public # 
│  └─ logo-icon.svg # 
├─ src # 
│  ├─ App.vue
│  ├─ api # 存放全局请求
│  │  ├─ Api.ts
│  │  ├─ index.ts
│  │  └─ test.ts
│  ├─ assets # 静态资源
│  ├─ bootstrap # 注册插件
│  ├─ components # 公共组件
│  ├─ config
│  │  ├─ index.ts # 全部配置项
│  │  └─ settings.ts # 首页右侧抽屉配置项
│  ├─ enum # 枚举类
│  ├─ hooks 
│  ├─ http # Axios
│  ├─ layouts # 布局
│  │  ├─ default
│  │  │  ├─ backTop # 返回顶部
│  │  │  │  └─ index.vue
│  │  │  ├─ components # 
│  │  │  │  ├─ right # 右侧抽屉区域组件
│  │  │  │  └─ settings # header区域 右侧设置页面
│  │  │  ├─ content # body内容
│  │  │  ├─ footer # 页脚
│  │  │  ├─ header # 顶部
│  │  │  ├─ logo # logo
│  │  │  ├─ menu # 菜单
│  │  │  ├─ page # 针对不同layout布局 统一处理
│  │  │  ├─ sider # layout 左侧区域
│  │  │  ├─ tabs # tabs
│  │  ├─ error # 异常页面
│  │  ├─ iframe # 
│  │  ├─ index.ts
│  │  ├─ refresh # 
│  │  └─ routerView # 
│  ├─ locales # 国际化处理
│  ├─ main.ts
│  ├─ naive # 
│  │  ├─ config  # 主题配置
│  │  ├─ index.ts # 资源引入
│  │  └─ style # 样式处理
│  ├─ pinia # 
│  │  ├─ index.ts # 入口
│  │  ├─ modules # store资源
│  │  └─ type # 定义类型
│  ├─ router # 
│  │  ├─ backRoutes # back模式
│  │  ├─ index.ts # 入口
│  │  ├─ moveRoutes # move模式
│  │  ├─ roleRoutes # role模式
│  │  ├─ routes # 路由白名单
│  │  └─ utils # 处理路由方法
│  ├─ test
│  ├─ type # 类型
│  ├─ utils # 全局方法
│  └─ views # 页面资源
├─ index.html # 
├─ package.json # 
├─ pnpm-lock.yaml # 
├─ postcss.config.js # 解决浏览器兼容性
├─ CHANGELOG.zh_CN.md # 每个版本升级说明
├─ LICENSE # MIT协议
├─ README.md
├─ README.zh-CN.md
├─ commitlint.config.js # commitlint 提交规范
├─ .prettierignore # 忽悠某些文件不进行代码格式化
├─ .prettierrc.json # 代码格式化风格配置
├─ .stylelintignore # 忽悠某些文件不进行 stylelintignore 格式化 
├─ .babelrc # babel插件
├─ .browserslistrc #配置兼容浏览器
├─ .cz-config.js # git cz 配置文档
├─ .editorconfig # 解决跨编辑器和 IDE 处理同一项目的多个开发人员维护一致的编码风格
├─ .env # 环境变量
├─ .env.development # 开发环境变量
├─ .env.production # 生产环境变量
├─ .eslintrc-auto-import.json # 配合 unplugin-auto-import/vite 插件使用
├─ .eslintrc.js # eslintrc配置文件
├─ .gitignore # 忽略文件 不提交到git仓库
├─ stylelint.config.js #  Css检测工具配置
├─ stylelintrc.json
├─ tsconfig.json
├─ vite.config.ts
└─ windi.config.ts

```