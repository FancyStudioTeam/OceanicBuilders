import { ComponentTypes, type TextInput as OceanicTextInput, type TextInputStyles } from "oceanic.js";

export class TextInput {
  data: Partial<OceanicTextInput>;

  constructor() {
    this.data = {
      type: ComponentTypes.TEXT_INPUT,
    };
  }

  setCustomID(customID: string): this {
    this.data.customID = customID;
    return this;
  }

  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  setMaxLength(maxLength: number): this {
    this.data.maxLength = maxLength;
    return this;
  }

  setMinLength(minLength: number): this {
    this.data.minLength = minLength;
    return this;
  }

  setPlaceholder(placeholder: string): this {
    this.data.placeholder = placeholder;
    return this;
  }

  setRequired(required: boolean): this {
    this.data.required = required;
    return this;
  }

  setStyle(style: TextInputStyles): this {
    this.data.style = style;
    return this;
  }

  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  toJSON(inArray: true): [OceanicTextInput];
  toJSON(inArray?: false): OceanicTextInput;
  toJSON(inArray = false): OceanicTextInput | OceanicTextInput[] {
    const data = this.data as OceanicTextInput;

    return inArray ? [data] : data;
  }
}
