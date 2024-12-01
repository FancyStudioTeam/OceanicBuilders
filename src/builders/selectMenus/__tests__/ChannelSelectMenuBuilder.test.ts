import { ChannelTypes, ComponentTypes, type ChannelSelectMenu as OceanicStringSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { ChannelSelectMenuBuilder } from "../ChannelSelectMenuBuilder.js";

const ChannelSelectMenu = (data?: Partial<OceanicStringSelectMenu>) => new ChannelSelectMenuBuilder(data);

describe("ChannelSelectMenuBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(ChannelSelectMenu().toJSON()).toStrictEqual({
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(ChannelSelectMenu().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with custom placeholder", () =>
      expect(ChannelSelectMenu().setPlaceholder("Test").toJSON()).toStrictEqual({
        placeholder: "Test",
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(ChannelSelectMenu().setDisabled(true).toJSON()).toStrictEqual({
        disabled: true,
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with custom minimum values", () =>
      expect(ChannelSelectMenu().setMinValues(1).toJSON()).toStrictEqual({
        minValues: 1,
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with custom maximum values", () =>
      expect(ChannelSelectMenu().setMaxValues(1).toJSON()).toStrictEqual({
        maxValues: 1,
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with custom default channels", () =>
      expect(
        ChannelSelectMenu()
          .setDefaultChannels(["1304852915407552512"])
          .addDefaultChannels(["1304852937075458048"])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1304852915407552512",
            type: "channel",
          },
          {
            id: "1304852937075458048",
            type: "channel",
          },
        ],
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with cleared placeholder", () =>
      expect(ChannelSelectMenu().setPlaceholder("Test").clear("placeholder").toJSON()).toStrictEqual({
        placeholder: undefined,
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base with force cleared placeholder", () =>
      expect(ChannelSelectMenu().setPlaceholder("Test").clear("placeholder", true).toJSON()).toStrictEqual({
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base adding custom channel types", () =>
      expect(
        ChannelSelectMenu()
          .addChannelTypes([ChannelTypes.GUILD_TEXT])
          .addChannelTypes([ChannelTypes.GUILD_VOICE])
          .toJSON(),
      ).toStrictEqual({
        channelTypes: [ChannelTypes.GUILD_TEXT, ChannelTypes.GUILD_VOICE],
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base setting custom channel types", () =>
      expect(
        ChannelSelectMenu()
          .addChannelTypes([ChannelTypes.GUILD_TEXT])
          .addChannelTypes([ChannelTypes.GUILD_VOICE])
          .setChannelTypes([ChannelTypes.DM])
          .toJSON(),
      ).toStrictEqual({
        channelTypes: [ChannelTypes.DM],
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base adding custom default channels", () =>
      expect(
        ChannelSelectMenu()
          .addDefaultChannels(["1304852915407552512"])
          .addDefaultChannels(["1304852937075458048"])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1304852915407552512",
            type: "channel",
          },
          {
            id: "1304852937075458048",
            type: "channel",
          },
        ],
        type: ComponentTypes.CHANNEL_SELECT,
      }));

    it("Should return JSON base setting custom default channels", () =>
      expect(
        ChannelSelectMenu()
          .addDefaultChannels(["1304852915407552512"])
          .addDefaultChannels(["1304852937075458048"])
          .setDefaultChannels(["1275065013631193241"])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1275065013631193241",
            type: "channel",
          },
        ],
        type: ComponentTypes.CHANNEL_SELECT,
      }));
  });

  describe("Using external data", () => {
    it("Receive action row type but should return channel select menu type", () =>
      expect(
        ChannelSelectMenu({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.CHANNEL_SELECT,
      }));
  });
});
