import { navbar } from "vuepress-theme-hope";

export default navbar([
  {text:'首页',link:'/'},
  { text: "指南", icon: "creative",
    children: [
      { text: "指南", icon: "weishiyong", link: "/guide/introduce" },
      { text: "项目配置", icon: "peizhiguanli", link: "/configure/settings" },
      { text: "其他", icon: "qita", link: "/other/faq" },
    ],
  },
  { text: "相关链接", icon: "creative", 
    children: [
      {text: '在线预览 ',icon: "/vLogo1.svg",link: 'https://www.mmxxn.cn/'},
      {text: '更新日志 ',icon: "rizhi",link: 'https://github.com/zane0904/Vnaive/blob/master/CHANGELOG.md'},
      {text: '源码 ',icon: "github",link: 'https://github.com/zane0904/Vnaive'},
      {text: '文档源码 ',icon: "github",link: 'https://github.com/zane0904/v-naive-admin-doc'},
    ],
  },
  { text: "社区资源", icon: "creative", 
  children:[
    {text: 'Vue3中文文档 ',icon: "https://img2.baidu.com/it/u=695596986,2446575701&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=221",link: 'https://cn.vuejs.org/'},
    {text: 'Vite中文文档 ',icon: "/vite.svg",link: 'https://cn.vitejs.dev/'},
    {text: 'Naive U I',icon: "https://www.naiveui.com/assets/naivelogo.93278402.svg",link: 'https://www.naiveui.com/zh-CN/light'},
    {text: 'Pinia ',icon: "https://pinia.web3doc.top/logo.svg",link: 'https://pinia.web3doc.top/'},
  ] 
},
]);
