import { ComponentTypes, type MentionableSelectMenu as OceanicMentionableSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { MentionableSelectMenuBuilder } from "../MentionableSelectMenuBuilder.js";

const MentionableSelectMenu = (data?: Partial<OceanicMentionableSelectMenu>) => new MentionableSelectMenuBuilder(data);

describe("MentionableSelectMenuBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(MentionableSelectMenu().toJSON()).toStrictEqual({
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(MentionableSelectMenu().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with custom placeholder", () =>
      expect(MentionableSelectMenu().setPlaceholder("Test").toJSON()).toStrictEqual({
        placeholder: "Test",
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(MentionableSelectMenu().setDisabled(true).toJSON()).toStrictEqual({
        disabled: true,
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with custom minimum values", () =>
      expect(MentionableSelectMenu().setMinValues(1).toJSON()).toStrictEqual({
        minValues: 1,
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with custom maximum values", () =>
      expect(MentionableSelectMenu().setMaxValues(1).toJSON()).toStrictEqual({
        maxValues: 1,
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with custom default values", () =>
      expect(
        MentionableSelectMenu()
          .setDefaultValues([
            {
              id: "user1",
              type: "user",
            },
          ])
          .addDefaultValues([
            {
              id: "channel1",
              type: "channel",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "user1",
            type: "user",
          },
          {
            id: "channel1",
            type: "channel",
          },
        ],
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with cleared placeholder", () =>
      expect(MentionableSelectMenu().setPlaceholder("Test").clear("placeholder").toJSON()).toStrictEqual({
        placeholder: undefined,
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base with force cleared placeholder", () =>
      expect(MentionableSelectMenu().setPlaceholder("Test").clear("placeholder", true).toJSON()).toStrictEqual({
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base adding custom default values", () =>
      expect(
        MentionableSelectMenu()
          .addDefaultValues([
            {
              id: "user1",
              type: "user",
            },
          ])
          .addDefaultValues([
            {
              id: "channel1",
              type: "channel",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "user1",
            type: "user",
          },
          {
            id: "channel1",
            type: "channel",
          },
        ],
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));

    it("Should return JSON base setting custom default values", () =>
      expect(
        MentionableSelectMenu()
          .addDefaultValues([
            {
              id: "user1",
              type: "user",
            },
          ])
          .addDefaultValues([
            {
              id: "channel1",
              type: "channel",
            },
          ])
          .setDefaultValues([
            {
              id: "role1",
              type: "role",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "role1",
            type: "role",
          },
        ],
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));
  });

  describe("Using external data", () => {
    it("Receive action row type but should return mentionable select menu type", () =>
      expect(
        MentionableSelectMenu({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.MENTIONABLE_SELECT,
      }));
  });
});
