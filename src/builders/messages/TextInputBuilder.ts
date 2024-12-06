import { ComponentTypes, type TextInput, type TextInputStyles } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class TextInputBuilder extends BaseBuilder<TextInput> {
  constructor(textInput?: Partial<TextInput>) {
    super({
      ...textInput,
      type: ComponentTypes.TEXT_INPUT,
    });
  }

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

  setLabel(label: string) {
    this.data.label = label;

    return this;
  }

  setMaxLength(maxLength: number) {
    this.data.maxLength = maxLength;

    return this;
  }

  setMinLength(minLength: number) {
    this.data.minLength = minLength;

    return this;
  }

  setPlaceholder(placeholder: string) {
    this.data.placeholder = placeholder;

    return this;
  }

  setRequired(isRequired = true) {
    this.data.required = isRequired;

    return this;
  }

  setStyle(style: TextInputStyles) {
    this.data.style = style;

    return this;
  }

  setValue(value: string) {
    this.data.value = value;

    return this;
  }
}

type AvailableClearOptions = keyof Pick<TextInput, "maxLength" | "minLength" | "placeholder" | "value">;
