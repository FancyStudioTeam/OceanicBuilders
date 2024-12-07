import type { EmbedOptions } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { EmbedBuilder } from "../EmbedBuilder.js";
import { EmbedFieldBuilder } from "../EmbedFieldBuilder.js";

const Embed = (data?: Partial<EmbedOptions>) => new EmbedBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () => expect(Embed().toJSON()).toStrictEqual({}));

  it("Should return JSON base with custom string author", () =>
    expect(Embed().setAuthor("Author Name").toJSON()).toStrictEqual({
      author: {
        name: "Author Name",
      },
    }));

  it("Should return JSON base with custom object author", () =>
    expect(
      Embed()
        .setAuthor({
          name: "Author Name",
        })
        .toJSON(),
    ).toStrictEqual({
      author: {
        name: "Author Name",
      },
    }));

  it("Should return JSON base with custom color", () =>
    expect(Embed().setColor(0xffffff).toJSON()).toStrictEqual({
      color: 0xffffff,
    }));

  it("Should return JSON base with custom description", () =>
    expect(Embed().setDescription("Embed Description").toJSON()).toStrictEqual({
      description: "Embed Description",
    }));

  it("Should return JSON base with custom fields", () =>
    expect(
      Embed()
        .setFields([
          {
            name: "Raw Field 1",
            value: "Raw Value 1",
          },
        ])
        .addFields([new EmbedFieldBuilder().setName("Builder Field 1").setValue("Builder Value 1")])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Raw Field 1",
          value: "Raw Value 1",
        },
        {
          name: "Builder Field 1",
          value: "Builder Value 1",
        },
      ],
    }));

  it("Should return JSON base with custom string footer", () =>
    expect(Embed().setFooter("Footer Text").toJSON()).toStrictEqual({
      footer: {
        text: "Footer Text",
      },
    }));

  it("Should return JSON base with custom object footer", () =>
    expect(
      Embed()
        .setFooter({
          text: "Footer Text",
        })
        .toJSON(),
    ).toStrictEqual({
      footer: {
        text: "Footer Text",
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
    expect(Embed().setTitle("Embed Title").toJSON()).toStrictEqual({
      title: "Embed Title",
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
            name: "Raw Field 1",
            value: "Raw Value 1",
          },
        ])
        .addFields([
          {
            name: "Raw Field 2",
            value: "Raw Value 2",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Raw Field 1",
          value: "Raw Value 1",
        },
        {
          name: "Raw Field 2",
          value: "Raw Value 2",
        },
      ],
    }));

  it("Should return JSON base setting JSON fields", () =>
    expect(
      Embed()
        .addFields([
          {
            name: "Raw Field 1",
            value: "Raw Value 1",
          },
        ])
        .addFields([
          {
            name: "Raw Field 2",
            value: "Raw Value 2",
          },
        ])
        .setFields([
          {
            name: "Raw Field 3",
            value: "Raw Value 3",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Raw Field 3",
          value: "Raw Value 3",
        },
      ],
    }));

  it("Should return JSON base adding builder fields", () =>
    expect(
      Embed()
        .addFields([new EmbedFieldBuilder().setName("Builder Field 1").setValue("Builder Value 1")])
        .addFields([new EmbedFieldBuilder().setName("Builder Field 2").setValue("Builder Value 2")])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Builder Field 1",
          value: "Builder Value 1",
        },
        {
          name: "Builder Field 2",
          value: "Builder Value 2",
        },
      ],
    }));

  it("Should return JSON base setting builder fields", () =>
    expect(
      Embed()
        .addFields([new EmbedFieldBuilder().setName("Builder Field 1").setValue("Builder Value 1")])
        .addFields([new EmbedFieldBuilder().setName("Builder Field 2").setValue("Builder Value 2")])
        .setFields([new EmbedFieldBuilder().setName("Builder Field 3").setValue("Builder Value 3")])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Builder Field 3",
          value: "Builder Value 3",
        },
      ],
    }));

  it("Should return JSON base adding JSON and builder fields", () =>
    expect(
      Embed()
        .addFields([
          {
            name: "Raw Field 1",
            value: "Raw Value 1",
          },
        ])
        .addFields([new EmbedFieldBuilder().setName("Builder Field 1").setValue("Builder Value 1")])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Raw Field 1",
          value: "Raw Value 1",
        },
        {
          name: "Builder Field 1",
          value: "Builder Value 1",
        },
      ],
    }));

  it("Should return JSON base setting JSON and builder fields", () =>
    expect(
      Embed()
        .addFields([
          {
            name: "Raw Field 1",
            value: "Raw Value 1",
          },
        ])
        .addFields([new EmbedFieldBuilder().setName("Builder Field 1").setValue("Builder Value 1")])
        .setFields([
          {
            name: "Raw Field 2",
            value: "Raw Value 2",
          },
          new EmbedFieldBuilder().setName("Builder Field 2").setValue("Builder Value 2"),
        ])
        .toJSON(),
    ).toStrictEqual({
      fields: [
        {
          name: "Raw Field 2",
          value: "Raw Value 2",
        },
        {
          name: "Builder Field 2",
          value: "Builder Value 2",
        },
      ],
    }));
});
