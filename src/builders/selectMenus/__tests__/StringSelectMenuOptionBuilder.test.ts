import type { SelectOption } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { StringSelectMenuOptionBuilder } from "../StringSelectMenuBuilder.js";

const StringSelectMenuOption = (data?: Partial<SelectOption>) => new StringSelectMenuOptionBuilder(data);

describe("StringSelectMenuOptionBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () => expect(StringSelectMenuOption().toJSON()).toStrictEqual({}));

    it("Should return JSON base with custom description", () =>
      expect(StringSelectMenuOption().setDescription("test").toJSON()).toStrictEqual({
        description: "test",
      }));

    it("Should return JSON base with custom emoji", () =>
      expect(
        StringSelectMenuOption()
          .setEmoji({
            name: "🤖",
          })
          .toJSON(),
      ).toStrictEqual({
        emoji: {
          name: "🤖",
        },
      }));

    it("Should return JSON base with custom label", () =>
      expect(StringSelectMenuOption().setLabel("Test").toJSON()).toStrictEqual({
        label: "Test",
      }));

    it("Should return JSON base with custom value", () =>
      expect(StringSelectMenuOption().setValue("test").toJSON()).toStrictEqual({
        value: "test",
      }));

    it("Should return JSON base with default option enabled", () =>
      expect(StringSelectMenuOption().setDefault().toJSON()).toStrictEqual({
        default: true,
      }));

    it("Should return JSON base with cleared description", () =>
      expect(StringSelectMenuOption().setDescription("test").clear("description").toJSON()).toStrictEqual({
        description: undefined,
      }));

    it("Should return JSON base with force cleared description", () =>
      expect(StringSelectMenuOption().setDescription("test").clear("description", true).toJSON()).toStrictEqual({}));

    it("Should return JSON base with cleared emoji", () =>
      expect(
        StringSelectMenuOption()
          .setEmoji({
            name: "🤖",
          })
          .clear("emoji")
          .toJSON(),
      ).toStrictEqual({
        emoji: undefined,
      }));

    it("Should return JSON base with force cleared emoji", () =>
      expect(
        StringSelectMenuOption()
          .setEmoji({
            name: "🤖",
          })
          .clear("emoji", true)
          .toJSON(),
      ).toStrictEqual({}));
  });
});
