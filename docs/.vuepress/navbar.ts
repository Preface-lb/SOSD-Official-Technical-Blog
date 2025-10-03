/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const zhNavbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  // 注释掉博客相关配置
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  { text: "茉莉花", link: "/Molihua/" },
  {text: "学习路线",link: "/LearningRoute/",},
  { text: "关于我们", link: "/About/" },
  { text: "计算机内功", link: "/computer-fundamentals/" },
]);

export const enNavbar = defineNavbarConfig([
  { text: "Home", link: "/en/" },
  // 注释掉博客相关配置
  // { text: 'Blog', link: '/en/blog/' },
  // { text: 'Tags', link: '/en/blog/tags/' },
  // { text: 'Archives', link: '/en/blog/archives/' },
  { text: "Molihua", link: "/en/Molihu/" },
  { text: "Learning Route",link: "/LearningRoute/",},
  { text: "About Us", link: "/en/About/" },
  { text: "Computer Fundamentals", link: "/en/computer-fundamentals/" },
]);
