import { ComponentTypes, type RoleSelectMenu as OceanicRoleSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenu } from "./SelectMenu.js";

export class RoleSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicRoleSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.ROLE_SELECT,
    });
  }

  setDefaultValue(defaultValue: SelectMenuDefaultValue): this {
    (this.data as OceanicRoleSelectMenu).defaultValues = [defaultValue];
    return this;
  }

  toJSON(inArray: true): [OceanicRoleSelectMenu];
  toJSON(inArray?: false): OceanicRoleSelectMenu;
  toJSON(inArray = false): OceanicRoleSelectMenu | OceanicRoleSelectMenu[] {
    const data = this.data as OceanicRoleSelectMenu;

    return inArray ? [data] : data;
  }
}
