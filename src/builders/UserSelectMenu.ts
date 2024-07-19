import { ComponentTypes, type UserSelectMenu as OceanicUserSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenu } from "./SelectMenu";

export class UserSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicUserSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.USER_SELECT,
    });
  }

  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this {
    (this.data as OceanicUserSelectMenu).defaultValues = defaultValues;
    return this;
  }

  toJSON(inArray: true): [OceanicUserSelectMenu];
  toJSON(inArray?: false): OceanicUserSelectMenu;
  toJSON(inArray = false): OceanicUserSelectMenu | OceanicUserSelectMenu[] {
    return inArray ? [this.data as OceanicUserSelectMenu] : (this.data as OceanicUserSelectMenu);
  }
}
