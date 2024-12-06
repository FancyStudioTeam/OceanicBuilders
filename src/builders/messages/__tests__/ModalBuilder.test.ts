import { ComponentTypes, type ModalData, TextInputStyles } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { ModalBuilder } from "../ModalBuilder.js";
import { TextInputBuilder } from "../TextInputBuilder.js";

const Modal = (data?: Partial<ModalData>) => new ModalBuilder(data);

describe("ModalBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () => expect(Modal().toJSON()).toStrictEqual({}));

    it("Should return JSON base with custom custom ID", () =>
      expect(Modal().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
      }));

    it("Should return JSON base with custom title", () =>
      expect(Modal().setTitle("Test").toJSON()).toStrictEqual({
        title: "Test",
      }));

    it("Should return JSON base with custom text inputs", () =>
      expect(
        Modal()
          .setComponents([
            {
              customID: "textInput1",
              label: "Test 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ])
          .addComponents([
            new TextInputBuilder().setCustomID("textInput2").setLabel("Test 2").setStyle(TextInputStyles.SHORT),
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            components: [
              {
                customID: "textInput1",
                label: "Test 1",
                style: TextInputStyles.SHORT,
                type: ComponentTypes.TEXT_INPUT,
              },
            ],
            type: ComponentTypes.ACTION_ROW,
          },
          {
            components: [
              {
                customID: "textInput2",
                label: "Test 2",
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
              customID: "textInput1",
              label: "Test 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ])
          .addComponents([
            {
              customID: "textInput2",
              label: "Test 2",
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
                customID: "textInput1",
                label: "Test 1",
                style: TextInputStyles.SHORT,
                type: ComponentTypes.TEXT_INPUT,
              },
            ],
            type: ComponentTypes.ACTION_ROW,
          },
          {
            components: [
              {
                customID: "textInput2",
                label: "Test 2",
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
              customID: "textInput1",
              label: "Test 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ])
          .addComponents([
            {
              customID: "textInput2",
              label: "Test 2",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ])
          .setComponents([
            {
              customID: "textInput3",
              label: "Test 3",
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
                customID: "textInput3",
                label: "Test 3",
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
            new TextInputBuilder().setCustomID("textInput1").setLabel("Test 1").setStyle(TextInputStyles.SHORT),
          ])
          .addComponents([
            new TextInputBuilder()
              .setCustomID("textInput2")
              .setLabel("Test 2")
              .setStyle(TextInputStyles.SHORT)
              .toJSON(),
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            components: [
              {
                customID: "textInput1",
                label: "Test 1",
                style: TextInputStyles.SHORT,
                type: ComponentTypes.TEXT_INPUT,
              },
            ],
            type: ComponentTypes.ACTION_ROW,
          },
          {
            components: [
              {
                customID: "textInput2",
                label: "Test 2",
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
            new TextInputBuilder().setCustomID("textInput1").setLabel("Test 1").setStyle(TextInputStyles.SHORT),
          ])
          .addComponents([
            new TextInputBuilder()
              .setCustomID("textInput2")
              .setLabel("Test 2")
              .setStyle(TextInputStyles.SHORT)
              .toJSON(),
          ])
          .setComponents([
            new TextInputBuilder().setCustomID("textInput3").setLabel("Test 3").setStyle(TextInputStyles.SHORT),
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            components: [
              {
                customID: "textInput3",
                label: "Test 3",
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
              customID: "textInput1",
              label: "Test 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ])
          .addComponents([
            new TextInputBuilder().setCustomID("textInput2").setLabel("Test 2").setStyle(TextInputStyles.SHORT),
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            components: [
              {
                customID: "textInput1",
                label: "Test 1",
                style: TextInputStyles.SHORT,
                type: ComponentTypes.TEXT_INPUT,
              },
            ],
            type: ComponentTypes.ACTION_ROW,
          },
          {
            components: [
              {
                customID: "textInput2",
                label: "Test 2",
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
              customID: "textInput1",
              label: "Test 1",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
          ])
          .addComponents([
            new TextInputBuilder().setCustomID("textInput2").setLabel("Test 2").setStyle(TextInputStyles.SHORT),
          ])
          .setComponents([
            {
              customID: "textInput3",
              label: "Test 3",
              style: TextInputStyles.SHORT,
              type: ComponentTypes.TEXT_INPUT,
            },
            new TextInputBuilder().setCustomID("textInput4").setLabel("Test 4").setStyle(TextInputStyles.SHORT),
          ])
          .toJSON(),
      ).toStrictEqual({
        components: [
          {
            components: [
              {
                customID: "textInput3",
                label: "Test 3",
                style: TextInputStyles.SHORT,
                type: ComponentTypes.TEXT_INPUT,
              },
            ],
            type: ComponentTypes.ACTION_ROW,
          },
          {
            components: [
              {
                customID: "textInput4",
                label: "Test 4",
                style: TextInputStyles.SHORT,
                type: ComponentTypes.TEXT_INPUT,
              },
            ],
            type: ComponentTypes.ACTION_ROW,
          },
        ],
      }));
  });
});
