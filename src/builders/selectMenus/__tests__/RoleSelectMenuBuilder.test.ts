import { ComponentTypes, type RoleSelectMenu as OceanicRoleSelectMenu } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { RoleSelectMenuBuilder } from "../RoleSelectMenuBuilder.js";

const RoleSelectMenu = (data?: Partial<OceanicRoleSelectMenu>) => new RoleSelectMenuBuilder(data);
const RoleIDs = {
  Role1: "1228065708462702727",
  Role2: "1227656741332975626",
  Role3: "1275783132359954472",
  Role4: "1304160465156575384",
};

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(RoleSelectMenu().toJSON()).toStrictEqual({
      type: ComponentTypes.ROLE_SELECT,
    }));

  it("Should return JSON base with custom ID", () =>
    expect(RoleSelectMenu().setCustomID("roleSelectMenu1").toJSON()).toStrictEqual({
      customID: "roleSelectMenu1",
      type: ComponentTypes.ROLE_SELECT,
    }));

  it("Should return JSON base with custom placeholder", () =>
    expect(RoleSelectMenu().setPlaceholder("Role Select Menu Placeholder").toJSON()).toStrictEqual({
      placeholder: "Role Select Menu Placeholder",
      type: ComponentTypes.ROLE_SELECT,
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(RoleSelectMenu().setDisabled().toJSON()).toStrictEqual({
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
    expect(RoleSelectMenu().setDefaultRoles([RoleIDs.Role1]).addDefaultRoles([RoleIDs.Role2]).toJSON()).toStrictEqual({
      defaultValues: [
        {
          id: RoleIDs.Role1,
          type: "role",
        },
        {
          id: RoleIDs.Role2,
          type: "role",
        },
      ],
      type: ComponentTypes.ROLE_SELECT,
    }));

  it("Should return JSON base with cleared placeholder", () =>
    expect(RoleSelectMenu().setPlaceholder("Role Select Menu Placeholder").clear("placeholder").toJSON()).toStrictEqual(
      {
        placeholder: undefined,
        type: ComponentTypes.ROLE_SELECT,
      },
    ));

  it("Should return JSON base with force cleared placeholder", () =>
    expect(
      RoleSelectMenu().setPlaceholder("Role Select Menu Placeholder").clear("placeholder", true).toJSON(),
    ).toStrictEqual({
      type: ComponentTypes.ROLE_SELECT,
    }));

  it("Should return JSON base adding custom default roles", () =>
    expect(RoleSelectMenu().addDefaultRoles([RoleIDs.Role1]).addDefaultRoles([RoleIDs.Role2]).toJSON()).toStrictEqual({
      defaultValues: [
        {
          id: RoleIDs.Role1,
          type: "role",
        },
        {
          id: RoleIDs.Role2,
          type: "role",
        },
      ],
      type: ComponentTypes.ROLE_SELECT,
    }));

  it("Should return JSON base setting custom default roles", () =>
    expect(
      RoleSelectMenu()
        .addDefaultRoles([RoleIDs.Role1])
        .addDefaultRoles([RoleIDs.Role2])
        .setDefaultRoles([RoleIDs.Role3])
        .toJSON(),
    ).toStrictEqual({
      defaultValues: [
        {
          id: RoleIDs.Role3,
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
