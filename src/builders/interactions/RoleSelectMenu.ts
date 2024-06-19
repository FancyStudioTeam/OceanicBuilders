import { ComponentTypes, type RoleSelectMenu as OceanicRoleSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import type { RoleSelectMenu as RoleSelectMenuType } from "../../types";
import { SelectMenu } from "../miscellaneous/SelectMenu";

export class RoleSelectMenu extends SelectMenu implements RoleSelectMenuType {
  constructor(selectMenu?: Partial<OceanicRoleSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.ROLE_SELECT,
    });
  }

  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this {
    (this.data as OceanicRoleSelectMenu).defaultValues = defaultValues;
    return this;
  }

  toJSON(): OceanicRoleSelectMenu {
    return this.data as OceanicRoleSelectMenu;
  }

  toJSONArray(): OceanicRoleSelectMenu[] {
    return [this.data as OceanicRoleSelectMenu];
  }
}
