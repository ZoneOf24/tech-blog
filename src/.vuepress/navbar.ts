import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "生活",
    icon: "mug-hot",
    prefix: "/posts/",
    children: [
      {
        text: "生活感悟",
        icon: "pencil",
        prefix: "生活感悟/",
        children: [
          { text: "生活小感慨", icon: "pencil", link: "生活小感慨" },
        ],
      },
    ]
  },
  {
    text: "技术",
    icon: "folder-open",
    prefix: "/posts/",
    children: [
      {
        text: "技术文档",
        icon: "folder-open",
        prefix: "技术文档/",
        children: [
          { text: "关于Helloworld", icon: "pen-to-square", link: "关于Helloworld" },
          { text: "关于Helloworld", icon: "pen-to-square", link: "关于Helloworld" },
        ],
      },
    ],
  },
  {
    text: "简介",
    icon: "address-card",
    prefix: "/",
    link: "intro",
  },



  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
