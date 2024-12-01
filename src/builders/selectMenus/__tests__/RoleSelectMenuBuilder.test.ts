import { ComponentTypes, type RoleSelectMenu as OceanicRoleSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { RoleSelectMenuBuilder } from "../RoleSelectMenuBuilder.js";

const RoleSelectMenu = (data?: Partial<OceanicRoleSelectMenu>) => new RoleSelectMenuBuilder(data);

describe("RoleSelectMenuBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(RoleSelectMenu().toJSON()).toStrictEqual({
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with custom ID", () =>
      expect(RoleSelectMenu().setCustomID("test").toJSON()).toStrictEqual({
        customID: "test",
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with custom placeholder", () =>
      expect(RoleSelectMenu().setPlaceholder("Test").toJSON()).toStrictEqual({
        placeholder: "Test",
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(RoleSelectMenu().setDisabled(true).toJSON()).toStrictEqual({
        disabled: true,
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with custom minimum values", () =>
      expect(RoleSelectMenu().setMinValues(1).toJSON()).toStrictEqual({
        minValues: 1,
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with custom maximum values", () =>
      expect(RoleSelectMenu().setMaxValues(1).toJSON()).toStrictEqual({
        maxValues: 1,
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with custom default roles", () =>
      expect(
        RoleSelectMenu().setDefaultRoles(["1305161856792395776"]).addDefaultRoles(["1227656741332975626"]).toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1305161856792395776",
            type: "role",
          },
          {
            id: "1227656741332975626",
            type: "role",
          },
        ],
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with cleared placeholder", () =>
      expect(RoleSelectMenu().setPlaceholder("Test").clear("placeholder").toJSON()).toStrictEqual({
        placeholder: undefined,
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base with force cleared placeholder", () =>
      expect(RoleSelectMenu().setPlaceholder("Test").clear("placeholder", true).toJSON()).toStrictEqual({
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base adding custom default roles", () =>
      expect(
        RoleSelectMenu().addDefaultRoles(["1305161856792395776"]).addDefaultRoles(["1227656741332975626"]).toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1305161856792395776",
            type: "role",
          },
          {
            id: "1227656741332975626",
            type: "role",
          },
        ],
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base setting custom default roles", () =>
      expect(
        RoleSelectMenu()
          .addDefaultRoles(["1305161856792395776"])
          .addDefaultRoles(["1227656741332975626"])
          .setDefaultRoles(["1245770494050041866"])
          .toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "1245770494050041866",
            type: "role",
          },
        ],
        type: ComponentTypes.ROLE_SELECT,
      }));
  });

  describe("Using external data", () => {
    it("Receive action row type but should return role select menu type", () =>
      expect(
        RoleSelectMenu({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.ROLE_SELECT,
      }));
  });
});
