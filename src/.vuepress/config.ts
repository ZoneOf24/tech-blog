import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/tech-blog/",

  lang: "zh-CN",
  title: "",
  description: "业余程序员的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
