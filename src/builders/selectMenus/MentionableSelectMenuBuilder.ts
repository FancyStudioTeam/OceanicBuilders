import { ComponentTypes, type MentionableSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

export class MentionableSelectMenuBuilder extends SelectMenuBaseBuilder<MentionableSelectMenu> {
  constructor(selectMenu?: Partial<MentionableSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.MENTIONABLE_SELECT,
    });
  }

  addDefaultValues(defaultValues: SelectMenuDefaultValue[]) {
    this.data.defaultValues ??= [];
    this.data.defaultValues.push(...defaultValues);

    return this;
  }

  setDefaultValues(defaultValues: SelectMenuDefaultValue[]) {
    this.data.defaultValues = defaultValues;

    return this;
  }
}
