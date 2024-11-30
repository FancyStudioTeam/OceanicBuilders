import { ButtonStyles, ComponentTypes, type TextButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { DangerButtonBuilder } from "../../../src/builders/index.js";

const DangerButton = (data?: Partial<TextButton>) => new DangerButtonBuilder(data);

describe("DangerButtonBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(DangerButton().toJSON()).toStrictEqual({
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(DangerButton().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(DangerButton().setDisabled().toJSON()).toStrictEqual({
        disabled: true,
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom label", () =>
      expect(DangerButton().setLabel("Test").toJSON()).toStrictEqual({
        label: "Test",
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom emoji", () =>
      expect(
        DangerButton()
          .setEmoji({
            name: "🤖",
          })
          .toJSON(),
      ).toStrictEqual({
        emoji: {
          name: "🤖",
        },
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared label", () =>
      expect(DangerButton().setLabel("Test").clear("label").toJSON()).toStrictEqual({
        label: undefined,
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared label", () =>
      expect(DangerButton().setLabel("Test").clear("label", true).toJSON()).toStrictEqual({
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with cleared emoji", () =>
      expect(
        DangerButton()
          .setEmoji({
            name: "🤖",
          })
          .clear("emoji")
          .toJSON(),
      ).toStrictEqual({
        emoji: undefined,
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with force cleared emoji", () =>
      expect(
        DangerButton()
          .setEmoji({
            name: "🤖",
          })
          .clear("emoji", true)
          .toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));
  });

  describe("Using external data", () => {
    it("Receive success button style but should return danger button style", () =>
      expect(
        DangerButton({
          style: ButtonStyles.SUCCESS,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));

    it("Receive action row type but should return button type", () =>
      expect(
        DangerButton({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.DANGER,
        type: ComponentTypes.BUTTON,
      }));
  });
});
