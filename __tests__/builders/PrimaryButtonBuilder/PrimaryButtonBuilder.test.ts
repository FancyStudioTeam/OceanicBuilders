import { ButtonStyles, ComponentTypes, type TextButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PrimaryButtonBuilder } from "../../../src/builders/index.js";

const PrimaryButton = (data?: Partial<TextButton>) => new PrimaryButtonBuilder(data);

describe("PrimaryButtonBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(PrimaryButton().toJSON()).toStrictEqual({
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(PrimaryButton().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(PrimaryButton().setDisabled().toJSON()).toStrictEqual({
        disabled: true,
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom label", () =>
      expect(PrimaryButton().setLabel("Test").toJSON()).toStrictEqual({
        label: "Test",
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom emoji", () =>
      expect(
        PrimaryButton()
          .setEmoji({
            name: "🤖",
          })
          .toJSON(),
      ).toStrictEqual({
        emoji: {
          name: "🤖",
        },
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared label", () =>
      expect(PrimaryButton().setLabel("Test").clearLabel().toJSON()).toStrictEqual({
        label: undefined,
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared label", () =>
      expect(PrimaryButton().setLabel("Test").clearLabel(true).toJSON()).toStrictEqual({
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared emoji", () =>
      expect(
        PrimaryButton()
          .setEmoji({
            name: "🤖",
          })
          .clearEmoji()
          .toJSON(),
      ).toStrictEqual({
        emoji: undefined,
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared emoji", () =>
      expect(
        PrimaryButton()
          .setEmoji({
            name: "🤖",
          })
          .clearEmoji(true)
          .toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));
  });

  describe("Using external data", () => {
    it("Receive secondary button style but should return primary button style", () =>
      expect(
        PrimaryButton({
          style: ButtonStyles.SECONDARY,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));

    it("Receive action row type but should return button type", () =>
      expect(
        PrimaryButton({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.PRIMARY,
        type: ComponentTypes.BUTTON,
      }));
  });
});
