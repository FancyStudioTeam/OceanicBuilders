import {
  ComponentTypes,
  type NullablePartialEmoji,
  type StringSelectMenu as OceanicStringSelectMenu,
  type SelectOption,
} from "oceanic.js";
import type { ValidSelectMenuOption } from "../types";
import { SelectMenu } from "./SelectMenu";

export class StringSelectMenuOption {
  data: Partial<SelectOption>;

  constructor() {
    this.data = {};
  }

  setDefault(_default: boolean): this {
    this.data.default = _default;
    return this;
  }

  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  setEmoji(emoji: NullablePartialEmoji): this {
    this.data.emoji = emoji;
    return this;
  }

  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  toJSON(inArray: true): [SelectOption];
  toJSON(inArray?: false): SelectOption;
  toJSON(inArray = false): SelectOption | SelectOption[] {
    return inArray ? [this.data as SelectOption] : (this.data as SelectOption);
  }
}

export class StringSelectMenu extends SelectMenu {
  options: SelectOption[];

  constructor(selectMenu?: Partial<OceanicStringSelectMenu>) {
    const { options, ...init } = selectMenu ?? {};

    super({
      ...init,
      type: ComponentTypes.STRING_SELECT,
    });

    this.options = options ?? [];
  }

  addOptions(options: ValidSelectMenuOption[]): this {
    for (const option of options) {
      this.options.push("toJSON" in option ? option.toJSON() : option);
    }

    return this;
  }

  toJSON(inArray: true): [OceanicStringSelectMenu];
  toJSON(inArray?: false): OceanicStringSelectMenu;
  toJSON(inArray = false): OceanicStringSelectMenu | OceanicStringSelectMenu[] {
    return inArray
      ? [
          {
            ...this.data,
            options: this.options,
          } as OceanicStringSelectMenu,
        ]
      : ({
          ...this.data,
          options: this.options,
        } as OceanicStringSelectMenu);
  }
}
