import { ButtonStyles, ComponentTypes, type TextButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { SecondaryButtonBuilder } from "../../../src/builders/index.js";

const SecondaryButton = (data?: Partial<TextButton>) => new SecondaryButtonBuilder(data);

describe("SecondaryButtonBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(SecondaryButton().toJSON()).toStrictEqual({
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(SecondaryButton().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(SecondaryButton().setDisabled().toJSON()).toStrictEqual({
        disabled: true,
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom label", () =>
      expect(SecondaryButton().setLabel("Test").toJSON()).toStrictEqual({
        label: "Test",
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom emoji", () =>
      expect(
        SecondaryButton()
          .setEmoji({
            name: "🤖",
          })
          .toJSON(),
      ).toStrictEqual({
        emoji: {
          name: "🤖",
        },
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared label", () =>
      expect(SecondaryButton().setLabel("Test").clearLabel().toJSON()).toStrictEqual({
        label: undefined,
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared label", () =>
      expect(SecondaryButton().setLabel("Test").clearLabel(true).toJSON()).toStrictEqual({
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared emoji", () =>
      expect(
        SecondaryButton()
          .setEmoji({
            name: "🤖",
          })
          .clearEmoji()
          .toJSON(),
      ).toStrictEqual({
        emoji: undefined,
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared emoji", () =>
      expect(
        SecondaryButton()
          .setEmoji({
            name: "🤖",
          })
          .clearEmoji(true)
          .toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));
  });

  describe("Using external data", () => {
    it("Receive primary button style but should return secondary button style", () =>
      expect(
        SecondaryButton({
          style: ButtonStyles.PRIMARY,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Receive action row type but should return button type", () =>
      expect(
        SecondaryButton({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      }));
  });
});
