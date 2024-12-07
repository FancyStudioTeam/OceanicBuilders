import type { EmbedField as OceanicEmbedField } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { EmbedFieldBuilder } from "../EmbedFieldBuilder.js";

const EmbedField = (data?: Partial<OceanicEmbedField>) => new EmbedFieldBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () => expect(EmbedField().toJSON()).toStrictEqual({}));

  it("Should return JSON base with custom name", () =>
    expect(EmbedField().setName("Field Name").toJSON()).toStrictEqual({
      name: "Field Name",
    }));

  it("Should return JSON base with custom value", () =>
    expect(EmbedField().setValue("Field Value").toJSON()).toStrictEqual({
      value: "Field Value",
    }));

  it("Should return JSON base with inline option enabled", () =>
    expect(EmbedField().setInline().toJSON()).toStrictEqual({
      inline: true,
    }));
});
