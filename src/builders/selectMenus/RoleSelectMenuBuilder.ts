import { ComponentTypes, type RoleSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

export class RoleSelectMenuBuilder extends SelectMenuBaseBuilder<RoleSelectMenu> {
  constructor(selectMenu?: Partial<RoleSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.ROLE_SELECT,
    });
  }

  addDefaultRoles(roleIDs: string[]) {
    const defaultValues = roleIDs.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "role",
    }));

    this.data.defaultValues ??= [];
    this.data.defaultValues.push(...defaultValues);

    return this;
  }

  setDefaultRoles(roleIDs: string[]) {
    const defaultValues = roleIDs.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "role",
    }));

    this.data.defaultValues = defaultValues;

    return this;
  }
}
