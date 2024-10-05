import { defineConfig } from "vitepress";

export const shared = defineConfig({
  cleanUrls: true,
  description: "A set of utilities for developing using Oceanic.js",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/logos/Dark.svg",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#2a5099",
      },
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        property: "og:locale",
        content: "en",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Oceanic Builders | A set of utilities for developing using Oceanic.js",
      },
    ],
    [
      "meta",
      {
        property: "og:site_name",
        content: "Oceanic Builders",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://oceanicbuilders.pages.dev/",
      },
    ],
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: {
      src: "/logos/Oceanic.svg",
    },
    search: {
      provider: "local",
    },
    siteTitle: false,
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/yWjeDA6ewJ",
      },
      {
        icon: "github",
        link: "https://github.com/FancyStudioTeam/OceanicBuilders",
      },
    ],
  },
  title: "Oceanic Builders",
});
