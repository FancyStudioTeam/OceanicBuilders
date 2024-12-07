import { ButtonStyles, ComponentTypes, type MessageActionRow } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PrimaryButtonBuilder } from "../../buttons/PrimaryButtonBuilder.js";
import { ActionRowBuilder } from "../ActionRowBuilder.js";

const ActionRow = (data?: Partial<MessageActionRow>) => new ActionRowBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(ActionRow().toJSON()).toStrictEqual({
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base with custom button components", () =>
    expect(
      ActionRow()
        .setComponents([
          {
            customID: "rawPrimaryButton1",
            label: "Raw Primary Button 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton1").setLabel("Builder Primary Button 1"),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "rawPrimaryButton1",
          label: "Raw Primary Button 1",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
        {
          customID: "builderPrimaryButton1",
          label: "Builder Primary Button 1",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base adding JSON components", () =>
    expect(
      ActionRow()
        .addComponents([
          {
            customID: "rawPrimaryButton1",
            label: "Raw Primary Button 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .addComponents([
          {
            customID: "rawPrimaryButton2",
            label: "Raw Primary Button 2",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "rawPrimaryButton1",
          label: "Raw Primary Button 1",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
        {
          customID: "rawPrimaryButton2",
          label: "Raw Primary Button 2",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base setting JSON components", () =>
    expect(
      ActionRow()
        .addComponents([
          {
            customID: "rawPrimaryButton1",
            label: "Raw Primary Button 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .addComponents([
          {
            customID: "rawPrimaryButton2",
            label: "Raw Primary Button 2",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .setComponents([
          {
            customID: "rawPrimaryButton3",
            label: "Raw Primary Button 3",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "rawPrimaryButton3",
          label: "Raw Primary Button 3",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base adding builder components", () =>
    expect(
      ActionRow()
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton1").setLabel("Builder Primary Button 1"),
        ])
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton2").setLabel("Builder Primary Button 2"),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "builderPrimaryButton1",
          label: "Builder Primary Button 1",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
        {
          customID: "builderPrimaryButton2",
          label: "Builder Primary Button 2",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base setting builder components", () =>
    expect(
      ActionRow()
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton1").setLabel("Builder Primary Button 1"),
        ])
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton2").setLabel("Builder Primary Button 2"),
        ])
        .setComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton3").setLabel("Builder Primary Button 3"),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "builderPrimaryButton3",
          label: "Builder Primary Button 3",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base adding JSON and builder components", () =>
    expect(
      ActionRow()
        .addComponents([
          {
            customID: "rawPrimaryButton1",
            label: "Raw Primary Button 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton1").setLabel("Builder Primary Button 1"),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "rawPrimaryButton1",
          label: "Raw Primary Button 1",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
        {
          customID: "builderPrimaryButton1",
          label: "Builder Primary Button 1",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));

  it("Should return JSON base setting JSON and builder components", () =>
    expect(
      ActionRow()
        .addComponents([
          {
            customID: "rawPrimaryButton1",
            label: "Raw Primary Button 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ])
        .addComponents([
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton1").setLabel("Builder Primary Button 1"),
        ])
        .setComponents([
          {
            customID: "rawPrimaryButton2",
            label: "Raw Primary Button 2",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
          new PrimaryButtonBuilder().setCustomID("builderPrimaryButton2").setLabel("Builder Primary Button 2"),
        ])
        .toJSON(),
    ).toStrictEqual({
      components: [
        {
          customID: "rawPrimaryButton2",
          label: "Raw Primary Button 2",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
        {
          customID: "builderPrimaryButton2",
          label: "Builder Primary Button 2",
          style: ButtonStyles.PRIMARY,
          type: ComponentTypes.BUTTON,
        },
      ],
      type: ComponentTypes.ACTION_ROW,
    }));
});

describe("Using external data", () => {
  it("Receive button type but should return action row type", () =>
    expect(
      ActionRow({
        // @ts-expect-error
        type: ComponentTypes.BUTTON,
      }).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.ACTION_ROW,
    }));
});
