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
        RoleSelectMenu().setDefaultRoles(["role1", "role2"]).addDefaultRoles(["role3", "role4"]).toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "role1",
            type: "role",
          },
          {
            id: "role2",
            type: "role",
          },
          {
            id: "role3",
            type: "role",
          },
          {
            id: "role4",
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
      expect(RoleSelectMenu().addDefaultRoles(["role1"]).addDefaultRoles(["role2"]).toJSON()).toStrictEqual({
        defaultValues: [
          {
            id: "role1",
            type: "role",
          },
          {
            id: "role2",
            type: "role",
          },
        ],
        type: ComponentTypes.ROLE_SELECT,
      }));

    it("Should return JSON base setting custom default roles", () =>
      expect(
        RoleSelectMenu().addDefaultRoles(["role1"]).addDefaultRoles(["role2"]).setDefaultRoles(["role3"]).toJSON(),
      ).toStrictEqual({
        defaultValues: [
          {
            id: "role3",
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
