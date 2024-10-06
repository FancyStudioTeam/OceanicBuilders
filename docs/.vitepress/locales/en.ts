import { type DefaultTheme, defineConfig } from "vitepress";

const DOCS_SIDEBAR: DefaultTheme.SidebarItem[] = [
  {
    base: "/builders/",
    collapsed: false,
    items: [
      {
        text: "ActionRow",
        link: "action-row",
      },
      {
        text: "Attachment",
        link: "attachment",
      },
      {
        text: "Button",
        link: "button",
      },
      {
        text: "ChannelSelectMenu",
        link: "channel-select-menu",
      },
      {
        text: "Embed",
        link: "embed",
      },
      {
        text: "EmbedField",
        link: "embed-field",
      },
      {
        text: "MentionableSelectMenu",
        link: "mentionable-select-menu",
      },
      {
        text: "Modal",
        link: "modal",
      },
      {
        text: "Poll",
        link: "poll",
      },
      {
        text: "PollMedia",
        link: "poll-media",
      },
      {
        text: "RoleSelectMenu",
        link: "role-select-menu",
      },
      {
        text: "StringSelectMenu",
        link: "string-select-menu",
      },
      {
        text: "StringSelectMenuOption",
        link: "string-select-menu-option",
      },
      {
        text: "TextInput",
        link: "text-input",
      },
      {
        text: "UserSelectMenu",
        link: "user-select-menu",
      },
    ],
    text: "Builders",
  },
];

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    docFooter: {
      next: "Next",
      prev: "Previous",
    },
    editLink: {
      pattern: "https://github.com/FancyStudioTeam/OceanicBuilders/tree/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Last Updated",
    },
    outline: {
      label: "On this page",
      level: "deep",
    },
    sidebar: {
      "/": DOCS_SIDEBAR,
    },
  },
});
