import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Orion's Site",
  tagline: "Think are cool",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true
  },

  // Set the production url of your site here
  url: "http://8.163.32.186/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pengtuli", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "content/paper",
          sidebarPath: "./sidebars.ts",
          routeBasePath: "paper",
          editUrl: "https://github.com/pengtuli/blog/tree/main/content/paper",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          numberPrefixParser(filename) {
            return { numberPrefix: undefined, filename };
          },
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pengtuli/blog/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // add /leetcode and /learning
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "learning",
        path: "content/learning",
        routeBasePath: "learning",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/pengtuli/blog/tree/main/content",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "leetcode",
        path: "content/leetcode",
        routeBasePath: "leetcode",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/pengtuli/blog/tree/main/content",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "reflection",
        path: "content/reflection",
        routeBasePath: "reflection",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/pengtuli/blog/tree/main/content",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Orion's Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "paperSidebar",
          position: "left",
          label: "Awesome Paper",
        },
        {
          type: "docSidebar",
          sidebarId: "learningSidebar",
          position: "left",
          label: "Learning",
          docsPluginId: "learning",
        },
        {
          type: "docSidebar",
          sidebarId: "leetcodeSidebar",
          position: "left",
          label: "Leetcode",
          docsPluginId: "leetcode",
        },
        {
          type: "docSidebar",
          sidebarId: "reflectionSidebar",
          position: "left",
          label: "Reflection",
          docsPluginId: "reflection",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/pengtuli/blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Orion Knowledge Library, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-nB0miv6/jRmo5UMMR1wu3Gz6NsoCbjUsmT4zB5KYQgfI0xwk6EtOv4F7o/Y3HpHr",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
