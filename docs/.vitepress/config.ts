import { defineConfig } from "vitepress";
/**
 @getNavList 获取导航菜单
**/ 
const getNavList = ()=>{
  return [
      { text: "首页", link: "/" },
      { text: "指南",
        items:[
          {text: '指南',link: '/guide/introduce'},
          {text: '基础配置',link: '/configure/router'},
          {text: '其他',link: 'string'},
        ] 
      },
      { text: "相关连接",
        items:[
          {text: '在线预览',link: 'string'},
          {text: '源码',link: 'string'},
          {text: '文档源码',link: 'string'},
          {text: '更新日志',link: 'string'},
        ] 
      },
      { text: "社区资源",
        items:[
          {text: 'Vue3中文文档',link: 'https://cn.vuejs.org/'},
          {text: 'Vite',link: 'https://cn.vitejs.dev/'},
          {text: 'Naive UI',link: 'https://www.naiveui.com/zh-CN/light'},
          {text: 'Pinia',link: 'https://pinia.web3doc.top/'},
        ] 
      },
    ]
}
/**
 @getNavList 获取左侧菜单
**/ 
const getSidebarList = ()=>{
  return {
    "/": [
      {
        text: '指南',
        items: [
          { text: "介绍", link: "/guide/introduce" },
          { text: "开始", link: "/guide/start.md" },
          { text: "目录结构", link: "/guide/catalogue.md" },
        ]
      },
      {
        text: '项目配置',
        items: [
          { text: "基本配置", link: "/configure/settings" },
          { text: "路由配置", link: "/configure/router" },
          { text: "Mock联调", link: "/configure/mock" },
        ]
      },
      {
        text: '其他问题',
        items: [
          { text: "xxx", link: "/other/faq" },
        ]
      }
    ],
  }
}
export default ({ command, mode })=>{
  console.log(command, mode);
  return {
    title: " ",
    description: "V Naive Admin",
    base: command === 'serve'?"/blog/":'./',
    head: [["link", { rel: "icon", type: "image/svg+xml", href: "vLogo1.svg" }]],
    lastUpdated: true,
    themeConfig: {
      logo: "/svg.svg",
      nav: getNavList(),
      socialLinks: [{ icon: "github", link: "https://github.com/zane0904" }],
      editLink:{
        text:'帮助我们改善此页面！',
        pattern:'https://github.com/zane0904/v-naive-admin-doc/edit/master/docs/:path',
        // https://github.com/zane0904/v-naive-admin-doc/edit/develop/dep/dark.md
        // pattern:'https://github.com/vuejs/vitepress/edit/main/docs/:path',',
      },
      lastUpdatedText:'最后一次更新时间',
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2019～present V Naive Admin",
      },
      // localeLinks:{
      //   text:'多语言',
      //   items:[{
      //     text: '中文',
      //     link: 'zh'
      //   }]
      // },
      // outlineTitle:'xxx',
      sidebar: getSidebarList()
    },
    vite: {
      server: {
        host: true,
        port: 3000,
        open: true,
        // proxy: {
        //   '/so': {
        //     target: 'http://139.159.245.209:5000', // 代理接口
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/so/, '')
        //   }
        // }
      },
    },
  }
};
