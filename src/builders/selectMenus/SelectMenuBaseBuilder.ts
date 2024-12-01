import type { SelectMenuComponent } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class SelectMenuBaseBuilder<T extends SelectMenuComponent> extends BaseBuilder<T> {
  clear(option: AvailableClearOptions, force = false) {
    // biome-ignore lint/performance/noDelete:
    // biome-ignore lint/suspicious/noAssignInExpressions:
    force ? delete this.data[option] : (this.data[option] = undefined);

    return this;
  }

  setCustomID(customID: string) {
    this.data.customID = customID;

    return this;
  }

  setDisabled(isDisabled = true) {
    this.data.disabled = isDisabled;

    return this;
  }

  setMaxValues(maxValues: number) {
    this.data.maxValues = maxValues;

    return this;
  }

  setMinValues(minValues: number) {
    this.data.minValues = minValues;

    return this;
  }

  setPlaceholder(placeholder: string) {
    this.data.placeholder = placeholder;

    return this;
  }
}

type AvailableClearOptions = keyof Pick<SelectMenuComponent, "placeholder">;
