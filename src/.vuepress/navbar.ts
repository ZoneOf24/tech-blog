import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "生活",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "生活感悟",
        icon: "pen-to-square",
        prefix: "生活感悟/",
        children: [
          { text: "生活小感慨", icon: "pen-to-square", link: "生活小感慨" },
        ],
      },
    ]
  },
  {
    text: "技术",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "技术文档",
        icon: "pen-to-square",
        prefix: "技术文档/",
        children: [
          { text: "关于Helloworld", icon: "pen-to-square", link: "关于Helloworld" },
          { text: "关于Helloworld", icon: "pen-to-square", link: "关于Helloworld" },
        ],
      },
    ],
  },
  {
    text: "个人介绍",
    icon: "book",
    prefix: "/",
    link: "intro",
  },



  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
