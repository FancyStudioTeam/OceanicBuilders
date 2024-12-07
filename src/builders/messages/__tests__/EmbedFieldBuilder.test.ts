import type { EmbedField as OceanicEmbedField } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { EmbedFieldBuilder } from "../EmbedFieldBuilder.js";

const EmbedField = (data?: Partial<OceanicEmbedField>) => new EmbedFieldBuilder(data);

describe("EmbedFieldBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () => expect(EmbedField().toJSON()).toStrictEqual({}));

    it("Should return JSON base with custom name", () =>
      expect(EmbedField().setName("Test").toJSON()).toStrictEqual({
        name: "Test",
      }));

    it("Should return JSON base with custom value", () =>
      expect(EmbedField().setValue("Test").toJSON()).toStrictEqual({
        value: "Test",
      }));

    it("Should return JSON base with inline option enabled", () =>
      expect(EmbedField().setInline(true).toJSON()).toStrictEqual({
        inline: true,
      }));
  });
});
