import { ComponentTypes, type UserSelectMenu as OceanicUserSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import type { UserSelectMenu as UserSelectMenuType } from "../../types";
import { SelectMenu } from "../miscellaneous/SelectMenu";

export class UserSelectMenu extends SelectMenu implements UserSelectMenuType {
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

  toJSON(): OceanicUserSelectMenu {
    return this.data as OceanicUserSelectMenu;
  }

  toJSONArray(): OceanicUserSelectMenu[] {
    return [this.data as OceanicUserSelectMenu];
  }
}
