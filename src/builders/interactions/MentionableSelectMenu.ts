import {
  ComponentTypes,
  type MentionableSelectMenu as OceanicMentionableSelectMenu,
  type SelectMenuDefaultValue,
} from "oceanic.js";
import type { MentionableSelectMenu as MentionableSelectMenuType } from "../../types";
import { SelectMenu } from "../miscellaneous/SelectMenu";

export class MentionableSelectMenu extends SelectMenu implements MentionableSelectMenuType {
  constructor(selectMenu?: Partial<OceanicMentionableSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.MENTIONABLE_SELECT,
    });
  }

  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this {
    (this.data as OceanicMentionableSelectMenu).defaultValues = defaultValues;
    return this;
  }

  toJSON(): OceanicMentionableSelectMenu {
    return this.data as OceanicMentionableSelectMenu;
  }

  toJSONArray(): OceanicMentionableSelectMenu[] {
    return [this.data as OceanicMentionableSelectMenu];
  }
}
