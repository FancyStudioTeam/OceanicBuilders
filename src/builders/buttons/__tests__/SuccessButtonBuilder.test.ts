import { ButtonStyles, ComponentTypes, type TextButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { SuccessButtonBuilder } from "../SuccessButtonBuilder.js";

const SuccessButton = (data?: Partial<TextButton>) => new SuccessButtonBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(SuccessButton().toJSON()).toStrictEqual({
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(SuccessButton().setCustomID("successButton1").toJSON()).toStrictEqual({
      customID: "successButton1",
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(SuccessButton().setDisabled().toJSON()).toStrictEqual({
      disabled: true,
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom label", () =>
    expect(SuccessButton().setLabel("Success Button").toJSON()).toStrictEqual({
      label: "Success Button",
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode string emoji", () =>
    expect(SuccessButton().setEmoji("🟢").toJSON()).toStrictEqual({
      emoji: {
        name: "🟢",
      },
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode object emoji", () =>
    expect(
      SuccessButton()
        .setEmoji({
          name: "🟢",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        name: "🟢",
      },
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom string emoji", () =>
    expect(SuccessButton().setEmoji("<:OWL:1303797827574698095>").toJSON()).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom object emoji", () =>
    expect(
      SuccessButton()
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
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared label", () =>
    expect(SuccessButton().setLabel("Success Button").clear("label").toJSON()).toStrictEqual({
      label: undefined,
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared label", () =>
    expect(SuccessButton().setLabel("Success Button").clear("label", true).toJSON()).toStrictEqual({
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared emoji", () =>
    expect(SuccessButton().setEmoji("🟢").clear("emoji").toJSON()).toStrictEqual({
      emoji: undefined,
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared emoji", () =>
    expect(SuccessButton().setEmoji("🟢").clear("emoji", true).toJSON()).toStrictEqual({
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));
});

describe("Using external data", () => {
  it("Receive danger button style but should return success button style", () =>
    expect(
      SuccessButton({
        style: ButtonStyles.DANGER,
      }).toJSON(),
    ).toStrictEqual({
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));

  it("Receive action row type but should return button type", () =>
    expect(
      SuccessButton({
        // @ts-expect-error
        type: ComponentTypes.ACTION_ROW,
      }).toJSON(),
    ).toStrictEqual({
      style: ButtonStyles.SUCCESS,
      type: ComponentTypes.BUTTON,
    }));
});
