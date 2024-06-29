import type { SelectMenuComponent } from "oceanic.js";
import { Component } from "./Component";

export class SelectMenu extends Component<SelectMenuComponent> {
  setCustomID(customID: string): this {
    this.data.customID = customID;
    return this;
  }

  setDisabled(disabled: boolean): this {
    this.data.disabled = disabled;
    return this;
  }

  setMaxValues(maxValue: number): this {
    this.data.maxValues = maxValue;
    return this;
  }

  setMinValues(minValue: number): this {
    this.data.minValues = minValue;
    return this;
  }

  setPlaceholder(placeholder: string): this {
    this.data.placeholder = placeholder;
    return this;
  }
}
