import { ComponentTypes, type StringSelectMenu as OceanicStringSelectMenu, type SelectOption } from "oceanic.js";
import type { StringSelectMenu as StringSelectMenuType } from "../../types";
import { SelectMenu } from "../miscellaneous/SelectMenu";

export class StringSelectMenu extends SelectMenu implements StringSelectMenuType {
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

  toJSON(): OceanicStringSelectMenu {
    return {
      ...this.data,
      options: this.options,
    } as OceanicStringSelectMenu;
  }

  toJSONArray(): OceanicStringSelectMenu[] {
    return [
      {
        ...this.data,
        options: this.options,
      } as OceanicStringSelectMenu,
    ];
  }
}
