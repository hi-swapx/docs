// @ts-check
import { themes as prismThemes } from "prism-react-renderer";
import searchLocal from "@easyops-cn/docusaurus-search-local";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SwapX",
  tagline: "Efficient, convenient and safe",
  favicon: "img/favicon.ico",

  // 生产环境 URL
  url: "https://docs.swapx.exchange",
  baseUrl: "/",

  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // 文档作为根路径
          sidebarPath: "./sidebars.js", // 引用侧边栏配置
          editUrl: "https://github.com/hi-swapx/docs",
          lastVersion: undefined,
          includeCurrentVersion: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css", // 引用自定义样式
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    [
      searchLocal,
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        indexPages: false,
      },
    ],
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 图片缩放功能
      image: 'img/social-card.png',
      // 公告栏配置
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ 如果你喜欢 SwapX，欢迎在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/hi-swapx/docs">GitHub</a> 上给我们一个 Star ⭐️',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      // 配色模式
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // 文档配置
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "SwapX Docs",
        logo: {
          alt: "SwapX Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: false,
        items: [
          // 顶部导航仅保留必要的系统链接，文档目录已移至左侧侧边栏
          
          // 搜索框
          {
            type: 'search',
            position: 'right', 
          },
          
          {
            href: "https://swapx.exchange/",
            label: "Go SwapX",
            position: "right",
            className: "navbar-swapx-link",
          },
          
          {
            href: "https://github.com/hi-swapx/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['solidity', 'javascript', 'typescript', 'json'],
      },
      // 表格配置
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

export default config;