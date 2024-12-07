import { ButtonStyles, ComponentTypes, type TextButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PrimaryButtonBuilder } from "../PrimaryButtonBuilder.js";

const PrimaryButton = (data?: Partial<TextButton>) => new PrimaryButtonBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(PrimaryButton().toJSON()).toStrictEqual({
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(PrimaryButton().setCustomID("primaryButton1").toJSON()).toStrictEqual({
      customID: "primaryButton1",
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
    expect(PrimaryButton().setLabel("Primary Button").toJSON()).toStrictEqual({
      label: "Primary Button",
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode string emoji", () =>
    expect(PrimaryButton().setEmoji("🔵").toJSON()).toStrictEqual({
      emoji: {
        name: "🔵",
      },
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode object emoji", () =>
    expect(
      PrimaryButton()
        .setEmoji({
          name: "🔵",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        name: "🔵",
      },
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom string emoji", () =>
    expect(PrimaryButton().setEmoji("<:OWL:1303797827574698095>").toJSON()).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom object emoji", () =>
    expect(
      PrimaryButton()
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
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared label", () =>
    expect(PrimaryButton().setLabel("Primary Button").clear("label").toJSON()).toStrictEqual({
      label: undefined,
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared label", () =>
    expect(PrimaryButton().setLabel("Primary Button").clear("label", true).toJSON()).toStrictEqual({
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared emoji", () =>
    expect(PrimaryButton().setEmoji("🔵").clear("emoji").toJSON()).toStrictEqual({
      emoji: undefined,
      style: ButtonStyles.PRIMARY,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared emoji", () =>
    expect(PrimaryButton().setEmoji("🔵").clear("emoji", true).toJSON()).toStrictEqual({
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
