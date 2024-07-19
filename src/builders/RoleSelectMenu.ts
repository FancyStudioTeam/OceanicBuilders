import { ComponentTypes, type RoleSelectMenu as OceanicRoleSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenu } from "./SelectMenu";

export class RoleSelectMenu extends SelectMenu {
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

  toJSON(inArray: true): [OceanicRoleSelectMenu];
  toJSON(inArray?: false): OceanicRoleSelectMenu;
  toJSON(inArray = false): OceanicRoleSelectMenu | OceanicRoleSelectMenu[] {
    return inArray ? [this.data as OceanicRoleSelectMenu] : (this.data as OceanicRoleSelectMenu);
  }
}
