import { ComponentTypes, type UserSelectMenu as OceanicUserSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { UserSelectMenuBuilder } from "../UserSelectMenuBuilder.js";

const UserSelectMenu = (data?: Partial<OceanicUserSelectMenu>) => new UserSelectMenuBuilder(data);
const UserIDs = {
  User1: "945029082314338407",
  User2: "360235359746916352",
  User3: "1228065406196125810",
  User4: "1166361658705330237",
};

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(UserSelectMenu().toJSON()).toStrictEqual({
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(UserSelectMenu().setCustomID("userSelectMenu1").toJSON()).toStrictEqual({
      customID: "userSelectMenu1",
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with custom placeholder", () =>
    expect(UserSelectMenu().setPlaceholder("User Select Menu Placeholder").toJSON()).toStrictEqual({
      placeholder: "User Select Menu Placeholder",
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(UserSelectMenu().setDisabled().toJSON()).toStrictEqual({
      disabled: true,
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with custom minimum values", () =>
    expect(UserSelectMenu().setMinValues(1).toJSON()).toStrictEqual({
      minValues: 1,
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with custom maximum values", () =>
    expect(UserSelectMenu().setMaxValues(1).toJSON()).toStrictEqual({
      maxValues: 1,
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with custom default users", () =>
    expect(UserSelectMenu().setDefaultUsers([UserIDs.User1]).addDefaultUsers([UserIDs.User2]).toJSON()).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User1,
          type: "user",
        },
        {
          id: UserIDs.User2,
          type: "user",
        },
      ],
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base with cleared placeholder", () =>
    expect(UserSelectMenu().setPlaceholder("User Select Menu Placeholder").clear("placeholder").toJSON()).toStrictEqual(
      {
        placeholder: undefined,
        type: ComponentTypes.USER_SELECT,
      },
    ));

  it("Should return JSON base with force cleared placeholder", () =>
    expect(
      UserSelectMenu().setPlaceholder("User Select Menu Placeholder").clear("placeholder", true).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base adding custom default users", () =>
    expect(UserSelectMenu().addDefaultUsers([UserIDs.User1]).addDefaultUsers([UserIDs.User2]).toJSON()).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User1,
          type: "user",
        },
        {
          id: UserIDs.User2,
          type: "user",
        },
      ],
      type: ComponentTypes.USER_SELECT,
    }));

  it("Should return JSON base setting custom default users", () =>
    expect(
      UserSelectMenu()
        .addDefaultUsers([UserIDs.User1])
        .addDefaultUsers([UserIDs.User2])
        .setDefaultUsers([UserIDs.User3])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: UserIDs.User3,
          type: "user",
        },
      ],
      type: ComponentTypes.USER_SELECT,
    }));
});

describe("Using external data", () => {
  it("Receive action row type but should return user select menu type", () =>
    expect(
      UserSelectMenu({
        // @ts-expect-error
        type: ComponentTypes.ACTION_ROW,
      }).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.USER_SELECT,
    }));
});
