import { ComponentTypes, type TextInput as OceanicTextInput, TextInputStyles } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { TextInputBuilder } from "../TextInputBuilder.js";

const TextInput = (data?: Partial<OceanicTextInput>) => new TextInputBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(TextInput().toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(TextInput().setCustomID("textInput1").toJSON()).toStrictEqual({
      customID: "textInput1",
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom label", () =>
    expect(TextInput().setLabel("Text Input").toJSON()).toStrictEqual({
      label: "Text Input",
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom placeholder", () =>
    expect(TextInput().setPlaceholder("Text Input Placeholder").toJSON()).toStrictEqual({
      placeholder: "Text Input Placeholder",
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom value", () =>
    expect(TextInput().setValue("Text Input Value").toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
      value: "Text Input Value",
    }));

  it("Should return JSON base with required option enabled", () =>
    expect(TextInput().setRequired().toJSON()).toStrictEqual({
      required: true,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom minimum length", () =>
    expect(TextInput().setMinLength(1).toJSON()).toStrictEqual({
      minLength: 1,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom maximum length", () =>
    expect(TextInput().setMaxLength(1).toJSON()).toStrictEqual({
      maxLength: 1,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with custom style", () =>
    expect(TextInput().setStyle(TextInputStyles.SHORT).toJSON()).toStrictEqual({
      style: TextInputStyles.SHORT,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with cleared placeholder", () =>
    expect(TextInput().setPlaceholder("Text Input Placeholder").clear("placeholder").toJSON()).toStrictEqual({
      placeholder: undefined,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with force cleared placeholder", () =>
    expect(TextInput().setPlaceholder("Text Input Placeholder").clear("placeholder", true).toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with cleared value", () =>
    expect(TextInput().setValue("Text Input Value").clear("value").toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
      value: undefined,
    }));

  it("Should return JSON base with force cleared value", () =>
    expect(TextInput().setValue("Text Input Value").clear("value", true).toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with cleared minimum length", () =>
    expect(TextInput().setMinLength(1).clear("minLength").toJSON()).toStrictEqual({
      minLength: undefined,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with force cleared minimum length", () =>
    expect(TextInput().setMinLength(1).clear("minLength", true).toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with cleared maximum length", () =>
    expect(TextInput().setMaxLength(1).clear("maxLength").toJSON()).toStrictEqual({
      maxLength: undefined,
      type: ComponentTypes.TEXT_INPUT,
    }));

  it("Should return JSON base with force cleared maximum length", () =>
    expect(TextInput().setMaxLength(1).clear("maxLength", true).toJSON()).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
    }));
});

describe("Using external data", () => {
  it("Receive action row type but should return text input type", () =>
    expect(
      TextInput({
        // @ts-expect-error
        type: ComponentTypes.ACTION_ROW,
      }).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.TEXT_INPUT,
    }));
});
