import { ButtonStyles, ComponentTypes, type URLButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { LinkButtonBuilder } from "../../../src/builders/index.js";

const LinkButton = (data?: Partial<URLButton>) => new LinkButtonBuilder(data);

describe("LinkButtonBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(LinkButton().toJSON()).toStrictEqual({
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom url", () =>
      expect(LinkButton().setURL("https://discord.com").toJSON()).toStrictEqual({
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
        url: "https://discord.com",
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(LinkButton().setDisabled().toJSON()).toStrictEqual({
        disabled: true,
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom label", () =>
      expect(LinkButton().setLabel("Test").toJSON()).toStrictEqual({
        label: "Test",
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom emoji", () =>
      expect(
        LinkButton()
          .setEmoji({
            name: "🤖",
          })
          .toJSON(),
      ).toStrictEqual({
        emoji: {
          name: "🤖",
        },
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared label", () =>
      expect(LinkButton().setLabel("Test").clear("label").toJSON()).toStrictEqual({
        label: undefined,
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared label", () =>
      expect(LinkButton().setLabel("Test").clear("label", true).toJSON()).toStrictEqual({
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared emoji", () =>
      expect(
        LinkButton()
          .setEmoji({
            name: "🤖",
          })
          .clear("emoji")
          .toJSON(),
      ).toStrictEqual({
        emoji: undefined,
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared emoji", () =>
      expect(
        LinkButton()
          .setEmoji({
            name: "🤖",
          })
          .clear("emoji", true)
          .toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));
  });

  describe("Using external data", () => {
    it("Receive premium button style but should return link button style", () =>
      expect(
        LinkButton({
          // @ts-expect-error
          style: ButtonStyles.PREMIUM,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));

    it("Receive action row type but should return button type", () =>
      expect(
        LinkButton({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.LINK,
        type: ComponentTypes.BUTTON,
      }));
  });
});
