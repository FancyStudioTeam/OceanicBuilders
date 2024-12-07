import { type ButtonComponent, ComponentTypes } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class ButtonBaseBuilder<T extends ButtonComponent> extends BaseBuilder<T> {
  constructor(button?: Partial<T>) {
    const init = button as Partial<T>;

    super({
      ...init,
      type: ComponentTypes.BUTTON,
    });
  }

  setDisabled(isDisabled = true) {
    this.data.disabled = isDisabled;

    return this;
  }
}
