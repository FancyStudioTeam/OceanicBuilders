import {
  ComponentTypes,
  type MentionableSelectMenu as OceanicMentionableSelectMenu,
  type SelectMenuDefaultValue,
} from "oceanic.js";
import { SelectMenu } from "./SelectMenu";

export class MentionableSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicMentionableSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.MENTIONABLE_SELECT,
    });
  }

  setDefaultValue(defaultValue: SelectMenuDefaultValue): this {
    (this.data as OceanicMentionableSelectMenu).defaultValues = [defaultValue];
    return this;
  }

  toJSON(inArray: true): [OceanicMentionableSelectMenu];
  toJSON(inArray?: false): OceanicMentionableSelectMenu;
  toJSON(inArray = false): OceanicMentionableSelectMenu | OceanicMentionableSelectMenu[] {
    return inArray ? [this.data as OceanicMentionableSelectMenu] : (this.data as OceanicMentionableSelectMenu);
  }
}
