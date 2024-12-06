import { ButtonStyles, ComponentTypes, type MessageActionRow } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PrimaryButtonBuilder } from "../../buttons/PrimaryButtonBuilder.js";
import { ActionRowBuilder } from "../ActionRowBuilder.js";

const ActionRow = (data?: Partial<MessageActionRow>) => new ActionRowBuilder(data);

describe("ActionRowBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(ActionRow().toJSON()).toStrictEqual({
        type: ComponentTypes.ACTION_ROW,
      }));

    it("Should return JSON base with custom components", () =>
      expect(
        ActionRow()
          .setComponents([
            {
              customID: "test1",
              label: "Test 1",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .addComponents([new PrimaryButtonBuilder().setCustomID("test2").setLabel("Test 2")])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test1",
            label: "Test 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
          {
            customID: "test2",
            label: "Test 2",
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
              customID: "test1",
              label: "Test 1",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .addComponents([
            {
              customID: "test2",
              label: "Test 2",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test1",
            label: "Test 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
          {
            customID: "test2",
            label: "Test 2",
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
              customID: "test1",
              label: "Test 1",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .addComponents([
            {
              customID: "test2",
              label: "Test 2",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .setComponents([
            {
              customID: "test3",
              label: "Test 3",
              style: ButtonStyles.SUCCESS,
              type: ComponentTypes.BUTTON,
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test3",
            label: "Test 3",
            style: ButtonStyles.SUCCESS,
            type: ComponentTypes.BUTTON,
          },
        ],
        type: ComponentTypes.ACTION_ROW,
      }));

    it("Should return JSON base adding builder components", () =>
      expect(
        ActionRow()
          .addComponents([new PrimaryButtonBuilder().setCustomID("test1").setLabel("Test 1")])
          .addComponents([new PrimaryButtonBuilder().setCustomID("test2").setLabel("Test 2").toJSON()])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test1",
            label: "Test 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
          {
            customID: "test2",
            label: "Test 2",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
        ],
        type: ComponentTypes.ACTION_ROW,
      }));

    it("Should return JSON base setting builder components", () =>
      expect(
        ActionRow()
          .addComponents([new PrimaryButtonBuilder().setCustomID("test1").setLabel("Test 1")])
          .addComponents([new PrimaryButtonBuilder().setCustomID("test2").setLabel("Test 2").toJSON()])
          .setComponents([new PrimaryButtonBuilder().setCustomID("test3").setLabel("Test 3")])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test3",
            label: "Test 3",
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
              customID: "test1",
              label: "Test 1",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .addComponents([new PrimaryButtonBuilder().setCustomID("test2").setLabel("Test 2")])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test1",
            label: "Test 1",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
          {
            customID: "test2",
            label: "Test 2",
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
              customID: "test1",
              label: "Test 1",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
          ])
          .addComponents([new PrimaryButtonBuilder().setCustomID("test2").setLabel("Test 2")])
          .setComponents([
            {
              customID: "test3",
              label: "Test 3",
              style: ButtonStyles.PRIMARY,
              type: ComponentTypes.BUTTON,
            },
            new PrimaryButtonBuilder().setCustomID("test4").setLabel("Test 4"),
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            customID: "test3",
            label: "Test 3",
            style: ButtonStyles.PRIMARY,
            type: ComponentTypes.BUTTON,
          },
          {
            customID: "test4",
            label: "Test 4",
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
});
