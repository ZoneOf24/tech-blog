import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/日常随笔/",
  "/posts/技术文档/",
  {
    text: "简介",
    icon: "address-card",
    prefix: "/",
    link: "intro.md",
  },
]);
