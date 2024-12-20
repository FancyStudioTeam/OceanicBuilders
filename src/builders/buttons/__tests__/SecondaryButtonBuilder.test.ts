import { ButtonStyles, ComponentTypes, type TextButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { SecondaryButtonBuilder } from "../SecondaryButtonBuilder.js";

const SecondaryButton = (data?: Partial<TextButton>) => new SecondaryButtonBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(SecondaryButton().toJSON()).toStrictEqual({
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(SecondaryButton().setCustomID("secondaryButton1").toJSON()).toStrictEqual({
      customID: "secondaryButton1",
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
    expect(SecondaryButton().setLabel("Secondary Button").toJSON()).toStrictEqual({
      label: "Secondary Button",
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode string emoji", () =>
    expect(SecondaryButton().setEmoji("🤍").toJSON()).toStrictEqual({
      emoji: {
        name: "🤍",
      },
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode object emoji", () =>
    expect(
      SecondaryButton()
        .setEmoji({
          name: "🤍",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        name: "🤍",
      },
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom string emoji", () =>
    expect(SecondaryButton().setEmoji("<:OWL:1303797827574698095>").toJSON()).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom object emoji", () =>
    expect(
      SecondaryButton()
        .setEmoji({
          id: "1303797827574698095",
          name: "OWL",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared label", () =>
    expect(SecondaryButton().setLabel("Secondary Button").clear("label").toJSON()).toStrictEqual({
      label: undefined,
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared label", () =>
    expect(SecondaryButton().setLabel("Secondary Button").clear("label", true).toJSON()).toStrictEqual({
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared emoji", () =>
    expect(SecondaryButton().setEmoji("🤍").clear("emoji").toJSON()).toStrictEqual({
      emoji: undefined,
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared emoji", () =>
    expect(SecondaryButton().setEmoji("🤍").clear("emoji", true).toJSON()).toStrictEqual({
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
