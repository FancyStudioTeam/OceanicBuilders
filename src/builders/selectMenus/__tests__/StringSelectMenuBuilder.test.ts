import { ComponentTypes, type StringSelectMenu as OceanicStringSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { StringSelectMenuBuilder } from "../StringSelectMenuBuilder.js";
import { StringSelectMenuOptionBuilder } from "../StringSelectMenuOptionBuilder.js";

const StringSelectMenu = (data?: Partial<OceanicStringSelectMenu>) => new StringSelectMenuBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(StringSelectMenu().toJSON()).toStrictEqual({
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(StringSelectMenu().setCustomID("stringSelectMenu1").toJSON()).toStrictEqual({
      customID: "stringSelectMenu1",
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with custom placeholder", () =>
    expect(StringSelectMenu().setPlaceholder("String Select Menu Placeholder").toJSON()).toStrictEqual({
      placeholder: "String Select Menu Placeholder",
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(StringSelectMenu().setDisabled().toJSON()).toStrictEqual({
      disabled: true,
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with custom minimum values", () =>
    expect(StringSelectMenu().setMinValues(1).toJSON()).toStrictEqual({
      minValues: 1,
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with custom maximum values", () =>
    expect(StringSelectMenu().setMaxValues(1).toJSON()).toStrictEqual({
      maxValues: 1,
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with custom options", () =>
    expect(
      StringSelectMenu()
        .setOptions(
          {
            label: "Raw Option 1",
            value: "rawOption1",
          },
          new StringSelectMenuOptionBuilder().setLabel("Builder Option 1").setValue("builderOption1"),
        )
        .addOptions(
          {
            label: "Raw Option 2",
            value: "rawOption2",
          },
          new StringSelectMenuOptionBuilder().setLabel("Builder Option 2").setValue("builderOption2"),
        )
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Raw Option 1",
          value: "rawOption1",
        },
        {
          label: "Builder Option 1",
          value: "builderOption1",
        },
        {
          label: "Raw Option 2",
          value: "rawOption2",
        },
        {
          label: "Builder Option 2",
          value: "builderOption2",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with cleared placeholder", () =>
    expect(
      StringSelectMenu().setPlaceholder("String Select Menu Placeholder").clear("placeholder").toJSON(),
    ).toStrictEqual({
      placeholder: undefined,
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base with force cleared placeholder", () =>
    expect(
      StringSelectMenu().setPlaceholder("String Select Menu Placeholder").clear("placeholder", true).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base adding JSON options", () =>
    expect(
      StringSelectMenu()
        .addOptions([
          {
            label: "Raw Option 1",
            value: "rawOption1",
          },
        ])
        .addOptions([
          {
            label: "Raw Option 2",
            value: "rawOption2",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Raw Option 1",
          value: "rawOption1",
        },
        {
          label: "Raw Option 2",
          value: "rawOption2",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base setting JSON options", () =>
    expect(
      StringSelectMenu()
        .addOptions([
          {
            label: "Raw Option 1",
            value: "rawOption1",
          },
        ])
        .addOptions([
          {
            label: "Raw Option 2",
            value: "rawOption2",
          },
        ])
        .setOptions([
          {
            label: "Raw Option 3",
            value: "rawOption3",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Raw Option 3",
          value: "rawOption3",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base adding builder options", () =>
    expect(
      StringSelectMenu()
        .addOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 1").setValue("builderOption1")])
        .addOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 2").setValue("builderOption2")])
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Builder Option 1",
          value: "builderOption1",
        },
        {
          label: "Builder Option 2",
          value: "builderOption2",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base setting builder options", () =>
    expect(
      StringSelectMenu()
        .addOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 1").setValue("builderOption1")])
        .addOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 2").setValue("builderOption2")])
        .setOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 3").setValue("builderOption3")])
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Builder Option 3",
          value: "builderOption3",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base adding JSON and builder options", () =>
    expect(
      StringSelectMenu()
        .addOptions([
          {
            label: "Raw Option 1",
            value: "rawOption1",
          },
        ])
        .addOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 1").setValue("builderOption1")])
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Raw Option 1",
          value: "rawOption1",
        },
        {
          label: "Builder Option 1",
          value: "builderOption1",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));

  it("Should return JSON base setting JSON and builder options", () =>
    expect(
      StringSelectMenu()
        .addOptions([
          {
            label: "Raw Option 1",
            value: "rawOption1",
          },
        ])
        .addOptions([new StringSelectMenuOptionBuilder().setLabel("Builder Option 1").setValue("builderOption1")])
        .setOptions([
          {
            label: "Raw Option 2",
            value: "rawOption2",
          },
          new StringSelectMenuOptionBuilder().setLabel("Builder Option 2").setValue("builderOption2"),
        ])
        .toJSON(),
    ).toStrictEqual({
      options: [
        {
          label: "Raw Option 2",
          value: "rawOption2",
        },
        {
          label: "Builder Option 2",
          value: "builderOption2",
        },
      ],
      type: ComponentTypes.STRING_SELECT,
    }));
});

describe("Using external data", () => {
  it("Receive action row type but should return string select menu type", () =>
    expect(
      StringSelectMenu({
        // @ts-expect-error
        type: ComponentTypes.ACTION_ROW,
      }).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.STRING_SELECT,
    }));
});
