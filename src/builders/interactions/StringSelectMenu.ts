import { ComponentTypes, type StringSelectMenu as OceanicStringSelectMenu, type SelectOption } from "oceanic.js";
import { SelectMenu } from "../miscellaneous/SelectMenu";

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

  addOption(option: SelectOption): this {
    this.options.push(option);
    return this;
  }

  addOptions(options: SelectOption[]): this {
    for (const option of options) {
      this.addOption(option);
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
