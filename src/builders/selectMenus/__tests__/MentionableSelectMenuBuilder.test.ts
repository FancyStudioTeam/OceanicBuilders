import { ComponentTypes, type MentionableSelectMenu as OceanicMentionableSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { MentionableDefaultValueBuilder } from "../MentionableDefaultValueBuilder.js";
import { MentionableSelectMenuBuilder } from "../MentionableSelectMenuBuilder.js";

const MentionableSelectMenu = (data?: Partial<OceanicMentionableSelectMenu>) => new MentionableSelectMenuBuilder(data);
const ChannelIDs = {
  Channel1: "1304852915407552512",
  Channel2: "1304852937075458048",
  Channel3: "1243623249934417940",
  Channel4: "1275065013631193241",
};
const UserIDs = {
  User1: "945029082314338407",
  User2: "360235359746916352",
  User3: "1228065406196125810",
  User4: "1166361658705330237",
};

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(MentionableSelectMenu().toJSON()).toStrictEqual({
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(MentionableSelectMenu().setCustomID("mentionableSelectMenu1").toJSON()).toStrictEqual({
      customID: "mentionableSelectMenu1",
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base with custom placeholder", () =>
    expect(MentionableSelectMenu().setPlaceholder("Mentionable Select Menu Placeholder").toJSON()).toStrictEqual({
      placeholder: "Mentionable Select Menu Placeholder",
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(MentionableSelectMenu().setDisabled().toJSON()).toStrictEqual({
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
        .setDefaultValues(
          {
            id: UserIDs.User1,
            type: "user",
          },
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel1).setType("channel"),
        )
        .addDefaultValues(
          {
            id: UserIDs.User2,
            type: "user",
          },
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel2).setType("channel"),
        )
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User1,
          type: "user",
        },
        {
          id: ChannelIDs.Channel1,
          type: "channel",
        },
        {
          id: UserIDs.User2,
          type: "user",
        },
        {
          id: ChannelIDs.Channel2,
          type: "channel",
        },
      ],
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base with cleared placeholder", () =>
    expect(
      MentionableSelectMenu().setPlaceholder("Mentionable Select Menu Placeholder").clear("placeholder").toJSON(),
    ).toStrictEqual({
      placeholder: undefined,
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base with force cleared placeholder", () =>
    expect(
      MentionableSelectMenu().setPlaceholder("Mentionable Select Menu Placeholder").clear("placeholder", true).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base adding JSON default values", () =>
    expect(
      MentionableSelectMenu()
        .addDefaultValues([
          {
            id: UserIDs.User1,
            type: "user",
          },
        ])
        .addDefaultValues([
          {
            id: ChannelIDs.Channel1,
            type: "channel",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User1,
          type: "user",
        },
        {
          id: ChannelIDs.Channel1,
          type: "channel",
        },
      ],
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base setting JSON default values", () =>
    expect(
      MentionableSelectMenu()
        .addDefaultValues([
          {
            id: UserIDs.User1,
            type: "user",
          },
        ])
        .addDefaultValues([
          {
            id: ChannelIDs.Channel1,
            type: "channel",
          },
        ])
        .setDefaultValues([
          {
            id: UserIDs.User2,
            type: "user",
          },
          {
            id: ChannelIDs.Channel2,
            type: "channel",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User2,
          type: "user",
        },
        {
          id: ChannelIDs.Channel2,
          type: "channel",
        },
      ],
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base adding builder default values", () =>
    expect(
      MentionableSelectMenu()
        .addDefaultValues([new MentionableDefaultValueBuilder().setMentionableID(UserIDs.User1).setType("user")])
        .addDefaultValues([
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel1).setType("channel"),
        ])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User1,
          type: "user",
        },
        {
          id: ChannelIDs.Channel1,
          type: "channel",
        },
      ],
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base setting builder default values", () =>
    expect(
      MentionableSelectMenu()
        .addDefaultValues([new MentionableDefaultValueBuilder().setMentionableID(UserIDs.User1).setType("user")])
        .addDefaultValues([
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel1).setType("channel"),
        ])
        .setDefaultValues([
          new MentionableDefaultValueBuilder().setMentionableID(UserIDs.User2).setType("user"),
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel2).setType("channel"),
        ])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User2,
          type: "user",
        },
        {
          id: ChannelIDs.Channel2,
          type: "channel",
        },
      ],
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base adding JSON and builder default values", () =>
    expect(
      MentionableSelectMenu()
        .addDefaultValues([
          {
            id: UserIDs.User1,
            type: "user",
          },
        ])
        .addDefaultValues([
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel1).setType("channel"),
        ])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User1,
          type: "user",
        },
        {
          id: ChannelIDs.Channel1,
          type: "channel",
        },
      ],
      type: ComponentTypes.MENTIONABLE_SELECT,
    }));

  it("Should return JSON base setting JSON and builder default values", () =>
    expect(
      MentionableSelectMenu()
        .addDefaultValues([
          {
            id: UserIDs.User1,
            type: "user",
          },
        ])
        .addDefaultValues([
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel1).setType("channel"),
        ])
        .setDefaultValues([
          {
            id: UserIDs.User2,
            type: "user",
          },
          new MentionableDefaultValueBuilder().setMentionableID(ChannelIDs.Channel2).setType("channel"),
        ])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User2,
          type: "user",
        },
        {
          id: ChannelIDs.Channel2,
          type: "channel",
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
