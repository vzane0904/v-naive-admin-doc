import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    // link: "/guide/",
    children: [
      {
        text: "介绍",
        icon: "note",
        collapsable: true,
        link:'introduce.md',
      },
      {
        text: "开始",
        icon: "note",
        collapsable: true,
        link: "start.md",
      },
      {
        text: "目录结构",
        icon: "note",
        link: "catalogue.md",
      },
    ],
  },
  {
    text: "项目配置",
    icon: "creative",
    prefix: "/configure/",
    // link: "/guide/",
    children: [
      {
        text: "基本配置",
        icon: "note",
        collapsable: true,
        link:'settings.md',
      },
      {
        text: "路由配置",
        icon: "note",
        collapsable: true,
        link: "router.md",
      },
      {
        text: "Mock联调",
        icon: "note",
         link: "mock.md",
      },
    ],
  },
  {
    text: "其他问题",
    icon: "creative",
    prefix: "/other/",
    children: [
      {
        text: "常见问题",
        icon: "note",
        collapsable: true,
        link:'faq.md',
      },
    ],
  },
]);
