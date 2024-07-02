import { ComponentTypes, type StringSelectMenu as OceanicStringSelectMenu, type SelectOption } from "oceanic.js";
import { Builder } from "./Builder";
import { SelectMenu } from "./SelectMenu";

export class StringSelectMenuOption extends Builder<SelectOption> {
  constructor() {
    super({});
  }

  setDefault(_default_: boolean): this {
    this.data.default = _default_;
    return this;
  }

  setDescription(description: string): this {
    this.data.description = description;
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

  /** @deprecated Use addOptions instead. */
  addOption(option: StringSelectMenuOption | SelectOption): this {
    this.options.push(option instanceof StringSelectMenuOption ? option.toJSON() : option);
    return this;
  }

  addOptions(options: (StringSelectMenuOption | SelectOption)[]): this {
    for (const option of options) {
      this.options.push(option instanceof StringSelectMenuOption ? option.toJSON() : option);
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

  /** @deprecated Use toJSON(true) instead. */
  toJSONArray(): OceanicStringSelectMenu[] {
    process.emitWarning(
      "toJSONArray is deprecated and will be removed in the next major, use toJSON(true) instead.",
      "StringSelectMenu",
    );

    return this.toJSON(true);
  }
}
