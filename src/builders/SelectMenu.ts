import type { SelectMenuComponent as OceanicSelectMenuComponent } from "oceanic.js";

export class SelectMenu {
  data: Partial<OceanicSelectMenuComponent>;

  constructor(selectMenu?: Partial<OceanicSelectMenuComponent>) {
    this.data = {
      ...selectMenu,
    };
  }

  setCustomID(customID: string): this {
    this.data.customID = customID;
    return this;
  }

  setDisabled(disabled: boolean): this {
    this.data.disabled = disabled;
    return this;
  }

  setMaxValues(maxValues: number): this {
    this.data.maxValues = maxValues;
    return this;
  }

  setMinValues(minValues: number): this {
    this.data.minValues = minValues;
    return this;
  }

  setPlaceholder(placeholder: string): this {
    this.data.placeholder = placeholder;
    return this;
  }
}
