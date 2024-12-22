import { ComponentTypes, type ModalData, TextInputStyles } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { ModalBuilder } from "../ModalBuilder.js";
import { TextInputBuilder } from "../TextInputBuilder.js";

const Modal = (data?: Partial<ModalData>) => new ModalBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () => expect(Modal().toJSON()).toStrictEqual({}));

  it("Should return JSON base with custom custom ID", () =>
    expect(Modal().setCustomID("modal1").toJSON()).toStrictEqual({
      customID: "modal1",
    }));

  it("Should return JSON base with custom title", () =>
    expect(Modal().setTitle("Example Modal").toJSON()).toStrictEqual({
      title: "Example Modal",
    }));

  it("Should return JSON base with custom text inputs", () =>
    expect(
      Modal()
        .setComponents(
          {
            customID: "rawTextInput1",
            label: "Raw Text Input 1",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
          new TextInputBuilder()
            .setCustomID("builderTextInput1")
            .setLabel("Builder Text Input 1")
            .setStyle(TextInputStyles.SHORT),
        )
        .addComponents(
          {
            customID: "rawTextInput2",
            label: "Raw Text Input 2",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
          new TextInputBuilder()
            .setCustomID("builderTextInput2")
            .setLabel("Builder Text Input 2")
            .setStyle(TextInputStyles.SHORT),
        )
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "rawTextInput1",
              label: "Raw Text Input 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "builderTextInput1",
              label: "Builder Text Input 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "rawTextInput2",
              label: "Raw Text Input 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "builderTextInput2",
              label: "Builder Text Input 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));

  it("Should return JSON base adding JSON text inputs", () =>
    expect(
      Modal()
        .addComponents([
          {
            customID: "rawTextInput1",
            label: "Raw Text Input 1",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .addComponents([
          {
            customID: "rawTextInput2",
            label: "Raw Text Input 2",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "rawTextInput1",
              label: "Raw Text Input 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "rawTextInput2",
              label: "Raw Text Input 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));

  it("Should return JSON base setting JSON text inputs", () =>
    expect(
      Modal()
        .addComponents([
          {
            customID: "rawTextInput1",
            label: "Raw Text Input 1",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .addComponents([
          {
            customID: "rawTextInput2",
            label: "Raw Text Input 2",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .setComponents([
          {
            customID: "rawTextInput3",
            label: "Raw Text Input 3",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "rawTextInput3",
              label: "Raw Text Input 3",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));

  it("Should return JSON base adding builder text inputs", () =>
    expect(
      Modal()
        .addComponents([
          new TextInputBuilder()
            .setCustomID("builderTextInput1")
            .setLabel("Builder Text Input 1")
            .setStyle(TextInputStyles.SHORT),
        ])
        .addComponents([
          new TextInputBuilder()
            .setCustomID("builderTextInput2")
            .setLabel("Builder Text Input 2")
            .setStyle(TextInputStyles.SHORT)
            .toJSON(),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "builderTextInput1",
              label: "Builder Text Input 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "builderTextInput2",
              label: "Builder Text Input 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));

  it("Should return JSON base setting builder text inputs", () =>
    expect(
      Modal()
        .addComponents([
          new TextInputBuilder()
            .setCustomID("builderTextInput1")
            .setLabel("Builder Text Input 1")
            .setStyle(TextInputStyles.SHORT),
        ])
        .addComponents([
          new TextInputBuilder()
            .setCustomID("builderTextInput2")
            .setLabel("Builder Text Input 2")
            .setStyle(TextInputStyles.SHORT),
        ])
        .setComponents([
          new TextInputBuilder()
            .setCustomID("builderTextInput3")
            .setLabel("Builder Text Input 3")
            .setStyle(TextInputStyles.SHORT),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "builderTextInput3",
              label: "Builder Text Input 3",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));

  it("Should return JSON base adding JSON and builder text inputs", () =>
    expect(
      Modal()
        .addComponents([
          {
            customID: "rawTextInput1",
            label: "Raw Text Input 1",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .addComponents([
          new TextInputBuilder()
            .setCustomID("builderTextInput1")
            .setLabel("Builder Text Input 1")
            .setStyle(TextInputStyles.SHORT),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "rawTextInput1",
              label: "Raw Text Input 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "builderTextInput1",
              label: "Builder Text Input 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));

  it("Should return JSON base setting JSON and builder text inputs", () =>
    expect(
      Modal()
        .addComponents([
          {
            customID: "rawTextInput1",
            label: "Raw Text Input 1",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
        ])
        .addComponents([new TextInputBuilder().setCustomID("builderTextInput1").setLabel("Builder Text Input 1")])
        .setComponents([
          {
            customID: "rawTextInput2",
            label: "Raw Text Input 2",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
          },
          new TextInputBuilder()
            .setCustomID("builderTextInput2")
            .setLabel("Builder Text Input 2")
            .setStyle(TextInputStyles.SHORT),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          components: [
            {
              customID: "rawTextInput2",
              label: "Raw Text Input 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
        {
          components: [
            {
              customID: "builderTextInput2",
              label: "Builder Text Input 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ],
          type: ComponentTypes.ACTION_ROW,
        },
      ],
    }));
});
