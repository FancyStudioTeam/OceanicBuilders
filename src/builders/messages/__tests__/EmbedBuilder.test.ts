import type { EmbedOptions } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { EmbedBuilder } from "../EmbedBuilder.js";
import { EmbedFieldBuilder } from "../EmbedFieldBuilder.js";

const Embed = (data?: Partial<EmbedOptions>) => new EmbedBuilder(data);

describe("EmbedBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () => expect(Embed().toJSON()).toStrictEqual({}));

    it("Should return JSON base with custom string author", () =>
      expect(Embed().setAuthor("Test").toJSON()).toStrictEqual({
        author: {
          name: "Test",
        },
      }));

    it("Should return JSON base with custom object author", () =>
      expect(
        Embed()
          .setAuthor({
            name: "Test",
          })
          .toJSON(),
      ).toStrictEqual({
        author: {
          name: "Test",
        },
      }));

    it("Should return JSON base with custom color", () =>
      expect(Embed().setColor(0x00ff00).toJSON()).toStrictEqual({
        color: 0x00ff00,
      }));

    it("Should return JSON base with custom description", () =>
      expect(Embed().setDescription("Test").toJSON()).toStrictEqual({
        description: "Test",
      }));

    it("Should return JSON base with custom fields", () =>
      expect(
        Embed()
          .setFields([
            {
              name: "Field 1",
              value: "Value 1",
            },
          ])
          .addFields([new EmbedFieldBuilder().setName("Field 2").setValue("Value 2")])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 1",
            value: "Value 1",
          },
          {
            name: "Field 2",
            value: "Value 2",
          },
        ],
      }));

    it("Should return JSON base with custom string footer", () =>
      expect(Embed().setFooter("Test").toJSON()).toStrictEqual({
        footer: {
          text: "Test",
        },
      }));

    it("Should return JSON base with custom object footer", () =>
      expect(
        Embed()
          .setFooter({
            text: "Test",
          })
          .toJSON(),
      ).toStrictEqual({
        footer: {
          text: "Test",
        },
      }));

    it("Should return JSON base with custom image", () =>
      expect(Embed().setImage("https://example.com/image.png").toJSON()).toStrictEqual({
        image: {
          url: "https://example.com/image.png",
        },
      }));

    it("Should return JSON base with custom thumbnail", () =>
      expect(Embed().setThumbnail("https://example.com/thumbnail.png").toJSON()).toStrictEqual({
        thumbnail: {
          url: "https://example.com/thumbnail.png",
        },
      }));

    it("Should return JSON base with custom timestamp", () =>
      expect(Embed().setTimestamp(new Date("2024").toISOString()).toJSON()).toStrictEqual({
        timestamp: new Date("2024").toISOString(),
      }));

    it("Should return JSON base with custom title", () =>
      expect(Embed().setTitle("Test").toJSON()).toStrictEqual({
        title: "Test",
      }));

    it("Should return JSON base with custom URL", () =>
      expect(Embed().setURL("https://example.com").toJSON()).toStrictEqual({
        url: "https://example.com",
      }));

    it("Should return JSON base adding JSON fields", () =>
      expect(
        Embed()
          .addFields([
            {
              name: "Field 1",
              value: "Value 1",
            },
          ])
          .addFields([
            {
              name: "Field 2",
              value: "Value 2",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 1",
            value: "Value 1",
          },
          {
            name: "Field 2",
            value: "Value 2",
          },
        ],
      }));

    it("Should return JSON base setting JSON fields", () =>
      expect(
        Embed()
          .addFields([
            {
              name: "Field 1",
              value: "Value 1",
            },
          ])
          .addFields([
            {
              name: "Field 2",
              value: "Value 2",
            },
          ])
          .setFields([
            {
              name: "Field 3",
              value: "Value 3",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 3",
            value: "Value 3",
          },
        ],
      }));

    it("Should return JSON base adding builder fields", () =>
      expect(
        Embed()
          .addFields([new EmbedFieldBuilder().setName("Field 1").setValue("Value 1")])
          .addFields([new EmbedFieldBuilder().setName("Field 2").setValue("Value 2").toJSON()])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 1",
            value: "Value 1",
          },
          {
            name: "Field 2",
            value: "Value 2",
          },
        ],
      }));

    it("Should return JSON base setting builder fields", () =>
      expect(
        Embed()
          .addFields([new EmbedFieldBuilder().setName("Field 1").setValue("Value 1")])
          .addFields([new EmbedFieldBuilder().setName("Field 2").setValue("Value 2").toJSON()])
          .setFields([new EmbedFieldBuilder().setName("Field 3").setValue("Value 3")])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 3",
            value: "Value 3",
          },
        ],
      }));

    it("Should return JSON base adding JSON and builder fields", () =>
      expect(
        Embed()
          .addFields([
            {
              name: "Field 1",
              value: "Value 1",
            },
          ])
          .addFields([new EmbedFieldBuilder().setName("Field 2").setValue("Value 2")])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 1",
            value: "Value 1",
          },
          {
            name: "Field 2",
            value: "Value 2",
          },
        ],
      }));

    it("Should return JSON base setting JSON and builder fields", () =>
      expect(
        Embed()
          .addFields([
            {
              name: "Field 1",
              value: "Value 1",
            },
          ])
          .addFields([new EmbedFieldBuilder().setName("Field 2").setValue("Value 2")])
          .setFields([
            {
              name: "Field 3",
              value: "Value 3",
            },
            new EmbedFieldBuilder().setName("Field 4").setValue("Value 4"),
          ])
          .toJSON(),
      ).toStrictEqual({
        fields: [
          {
            name: "Field 3",
            value: "Value 3",
          },
          {
            name: "Field 4",
            value: "Value 4",
          },
        ],
      }));
  });
});
