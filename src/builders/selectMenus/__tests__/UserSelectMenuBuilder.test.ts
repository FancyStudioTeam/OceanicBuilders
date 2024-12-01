import { ComponentTypes, type UserSelectMenu as OceanicUserSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { UserSelectMenuBuilder } from "../UserSelectMenuBuilder.js";

const UserSelectMenu = (data?: Partial<OceanicUserSelectMenu>) => new UserSelectMenuBuilder(data);

describe("UserSelectMenuBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(UserSelectMenu().toJSON()).toStrictEqual({
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(UserSelectMenu().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base with custom placeholder", () =>
      expect(UserSelectMenu().setPlaceholder("Test").toJSON()).toStrictEqual({
        placeholder: "Test",
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(UserSelectMenu().setDisabled(true).toJSON()).toStrictEqual({
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
      expect(
        UserSelectMenu().setDefaultUsers(["945029082314338407"]).addDefaultUsers(["360235359746916352"]).toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "945029082314338407",
            type: "user",
          },
          {
            id: "360235359746916352",
            type: "user",
          },
        ],
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base with cleared placeholder", () =>
      expect(UserSelectMenu().setPlaceholder("Test").clear("placeholder").toJSON()).toStrictEqual({
        placeholder: undefined,
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base with force cleared placeholder", () =>
      expect(UserSelectMenu().setPlaceholder("Test").clear("placeholder", true).toJSON()).toStrictEqual({
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base adding custom default users", () =>
      expect(
        UserSelectMenu().addDefaultUsers(["945029082314338407"]).addDefaultUsers(["360235359746916352"]).toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "945029082314338407",
            type: "user",
          },
          {
            id: "360235359746916352",
            type: "user",
          },
        ],
        type: ComponentTypes.USER_SELECT,
      }));

    it("Should return JSON base setting custom default users", () =>
      expect(
        UserSelectMenu()
          .addDefaultUsers(["945029082314338407"])
          .addDefaultUsers(["360235359746916352"])
          .setDefaultUsers(["1228065406196125810"])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1228065406196125810",
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
});
