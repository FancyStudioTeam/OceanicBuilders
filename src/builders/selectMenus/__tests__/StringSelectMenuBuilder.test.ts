import { ComponentTypes, type StringSelectMenu as OceanicStringSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "../StringSelectMenuBuilder.js";

const StringSelectMenu = (data?: Partial<OceanicStringSelectMenu>) => new StringSelectMenuBuilder(data);

describe("StringSelectMenuBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(StringSelectMenu().toJSON()).toStrictEqual({
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(StringSelectMenu().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base with custom placeholder", () =>
      expect(StringSelectMenu().setPlaceholder("Test").toJSON()).toStrictEqual({
        placeholder: "Test",
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(StringSelectMenu().setDisabled(true).toJSON()).toStrictEqual({
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
          .setOptions([
            {
              label: "Option 1",
              value: "option1",
            },
          ])
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 2").setValue("option2")])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ],
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base with cleared placeholder", () =>
      expect(StringSelectMenu().setPlaceholder("Test").clear("placeholder").toJSON()).toStrictEqual({
        placeholder: undefined,
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base with force cleared placeholder", () =>
      expect(StringSelectMenu().setPlaceholder("Test").clear("placeholder", true).toJSON()).toStrictEqual({
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base adding JSON options", () =>
      expect(
        StringSelectMenu()
          .addOptions([
            {
              label: "Option 1",
              value: "option1",
            },
          ])
          .addOptions([
            {
              label: "Option 2",
              value: "option2",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ],
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base setting JSON options", () =>
      expect(
        StringSelectMenu()
          .addOptions([
            {
              label: "Option 1",
              value: "option1",
            },
          ])
          .addOptions([
            {
              label: "Option 2",
              value: "option2",
            },
          ])
          .setOptions([
            {
              label: "Option 3",
              value: "option3",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 3",
            value: "option3",
          },
        ],
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base adding builder options", () =>
      expect(
        StringSelectMenu()
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 1").setValue("option1")])
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 2").setValue("option2").toJSON()])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ],
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base setting builder options", () =>
      expect(
        StringSelectMenu()
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 1").setValue("option1")])
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 2").setValue("option2").toJSON()])
          .setOptions([new StringSelectMenuOptionBuilder().setLabel("Option 3").setValue("option3")])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 3",
            value: "option3",
          },
        ],
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base adding JSON and builder options", () =>
      expect(
        StringSelectMenu()
          .addOptions([
            {
              label: "Option 1",
              value: "option1",
            },
          ])
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 2").setValue("option2")])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ],
        type: ComponentTypes.STRING_SELECT,
      }));

    it("Should return JSON base setting JSON and builder options", () =>
      expect(
        StringSelectMenu()
          .addOptions([
            {
              label: "Option 1",
              value: "option1",
            },
          ])
          .addOptions([new StringSelectMenuOptionBuilder().setLabel("Option 2").setValue("option2")])
          .setOptions([
            {
              label: "Option 3",
              value: "option3",
            },
            new StringSelectMenuOptionBuilder().setLabel("Option 4").setValue("option4"),
          ])
          .toJSON(),
      ).toStrictEqual({
        options: [
          {
            label: "Option 3",
            value: "option3",
          },
          {
            label: "Option 4",
            value: "option4",
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
});
