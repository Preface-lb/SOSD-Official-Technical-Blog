/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'S0SD Technical Blog',
      lang: 'zh-CN',
      description: 'Knowledge Repository',
    },
    '/en/': {
      title: 'S0SD Technical Blog',
      lang: 'en-US',
      description: 'Knowledge Repository',
    },
  },

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/SOSD.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用


  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     * 注释 twoslash（需 @vuepress/shiki-twoslash 依赖），保留基础高亮
     */
    codeHighlighter: {
      // twoslash: true, // 启用 twoslash（依赖缺失，暂注释）
      whitespace: true, // 启用 空格/Tab 高亮
      lineNumbers: true, // 启用行号
    },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,

    /**
     * markdown
     * @see https://theme-plume.vuejs.press/config/markdown/
     * 注释所有需要额外依赖的功能（视频、图表、代码Repl等）
     */
    markdown: {
      abbr: true,         // 启用 abbr 语法  *[label]: content
      annotation: true,   // 启用 annotation 语法  [+label]: content
      // pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)（依赖缺失，暂注释）
      plot: true,         // 启用隐秘文本语法 !!xxxx!!
      // bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)（依赖缺失，暂注释）
      // youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)（依赖缺失，暂注释）
      // artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)（依赖缺失，暂注释）
      // audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)（依赖缺失，暂注释）
      icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
      table: true,        // 启用表格增强容器语法 ::: table
      // codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)（依赖缺失，暂注释）
      // replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)（依赖缺失，暂注释）
      // codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)（依赖缺失，暂注释）
      // jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)（依赖缺失，暂注释）
      // npmTo: true,        // 启用 npm-to 容器  ::: npm-to（依赖缺失，暂注释）
      // demo: true,         // 启用 demo 容器  ::: demo（依赖缺失，暂注释）
      // repl: {             // 启用 代码演示容器（依赖 pyodide 等，暂注释）
      //   go: true,         // ::: go-repl
      //   rust: true,       // ::: rust-repl
      //   kotlin: true,     // ::: kotlin-repl
      //   python: true,     // ::: python-repl
      // },
      // math: {             // 启用数学公式（依赖 katex，暂注释）
      //   type: 'katex',
      // },
      // chartjs: true,      // 启用 chart.js（依赖缺失，暂注释）
      // echarts: true,      // 启用 ECharts（依赖缺失，暂注释）
      // mermaid: true,      // 启用 mermaid（依赖缺失，暂注释）
      // flowchart: true,    // 启用 flowchart（依赖缺失，暂注释）
      image: {
        figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        mark: true,       // 启用图片标记
        size: true,       // 启用图片大小
      },
      include: false,      // 在 Markdown 文件中导入其他 markdown 文件内容
      imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     * 注释 Artalk 评论（依赖 artalk 包，暂禁用）
     */
    // comment: {
    //   provider: 'Artalk', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})

