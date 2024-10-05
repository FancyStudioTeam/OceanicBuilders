import { ComponentTypes, type UserSelectMenu as OceanicUserSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenu } from "./SelectMenu.js";

export class UserSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicUserSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.USER_SELECT,
    });
  }

  setDefaultValue(defaultValue: SelectMenuDefaultValue): this {
    (this.data as OceanicUserSelectMenu).defaultValues = [defaultValue];
    return this;
  }

  toJSON(inArray: true): [OceanicUserSelectMenu];
  toJSON(inArray?: false): OceanicUserSelectMenu;
  toJSON(inArray = false): OceanicUserSelectMenu | OceanicUserSelectMenu[] {
    const data = this.data as OceanicUserSelectMenu;

    return inArray ? [data] : data;
  }
}
