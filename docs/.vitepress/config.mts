import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ninja 后台管理系统",
  description: "一个基于union css vxe-table 构建的后台界面",
  base: "/EMSVue",
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "discord", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "facebook", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "instagram", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "mastodon", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "slack", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "twitter", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "x", link: "https://github.com/nbqcode/EMSVue.git" },
      { icon: "youtube", link: "https://github.com/nbqcode/EMSVue.git" },
    ],
  },
});
