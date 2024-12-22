import { ChannelTypes, ComponentTypes, type ChannelSelectMenu as OceanicStringSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { ChannelSelectMenuBuilder } from "../ChannelSelectMenuBuilder.js";

const ChannelSelectMenu = (data?: Partial<OceanicStringSelectMenu>) => new ChannelSelectMenuBuilder(data);
const ChannelIDs = {
  Channel1: "1304852915407552512",
  Channel2: "1304852937075458048",
  Channel3: "1243623249934417940",
  Channel4: "1275065013631193241",
};

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(ChannelSelectMenu().toJSON()).toStrictEqual({
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(ChannelSelectMenu().setCustomID("channelSelectMenu1").toJSON()).toStrictEqual({
      customID: "channelSelectMenu1",
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base with custom placeholder", () =>
    expect(ChannelSelectMenu().setPlaceholder("Channel Select Menu Placeholder").toJSON()).toStrictEqual({
      placeholder: "Channel Select Menu Placeholder",
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(ChannelSelectMenu().setDisabled().toJSON()).toStrictEqual({
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

  it("Should return JSON base with custom channel types", () =>
    expect(
      ChannelSelectMenu()
        .setChannelTypes(ChannelTypes.GUILD_TEXT, ChannelTypes.GUILD_VOICE)
        .addChannelTypes(ChannelTypes.DM, ChannelTypes.GROUP_DM)
        .toJSON(),
    ).toStrictEqual({
      channelTypes: [ChannelTypes.GUILD_TEXT, ChannelTypes.GUILD_VOICE, ChannelTypes.DM, ChannelTypes.GROUP_DM],
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base with custom default channels", () =>
    expect(
      ChannelSelectMenu()
        .setDefaultChannels(ChannelIDs.Channel1, ChannelIDs.Channel2)
        .addDefaultChannels(ChannelIDs.Channel3, ChannelIDs.Channel4)
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: ChannelIDs.Channel1,
          type: "channel",
        },
        {
          id: ChannelIDs.Channel2,
          type: "channel",
        },
        {
          id: ChannelIDs.Channel3,
          type: "channel",
        },
        {
          id: ChannelIDs.Channel4,
          type: "channel",
        },
      ],
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base with cleared placeholder", () =>
    expect(
      ChannelSelectMenu().setPlaceholder("Channel Select Menu Placeholder").clear("placeholder").toJSON(),
    ).toStrictEqual({
      placeholder: undefined,
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base with force cleared placeholder", () =>
    expect(
      ChannelSelectMenu().setPlaceholder("Channel Select Menu Placeholder").clear("placeholder", true).toJSON(),
    ).toStrictEqual({
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
      ChannelSelectMenu().addDefaultChannels([ChannelIDs.Channel1]).addDefaultChannels([ChannelIDs.Channel2]).toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: ChannelIDs.Channel1,
          type: "channel",
        },
        {
          id: ChannelIDs.Channel2,
          type: "channel",
        },
      ],
      type: ComponentTypes.CHANNEL_SELECT,
    }));

  it("Should return JSON base setting custom default channels", () =>
    expect(
      ChannelSelectMenu()
        .addDefaultChannels([ChannelIDs.Channel1])
        .addDefaultChannels([ChannelIDs.Channel2])
        .setDefaultChannels([ChannelIDs.Channel3])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: ChannelIDs.Channel3,
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
