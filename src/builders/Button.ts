import {
  type ButtonComponent,
  type ButtonStyles,
  ComponentTypes,
  type NullablePartialEmoji,
  type PremiumButton,
  type TextButton,
  type URLButton,
} from "oceanic.js";

export class Button {
  data: Partial<ButtonComponent>;

  constructor(button?: Partial<ButtonComponent>) {
    this.data = {
      ...button,
      type: ComponentTypes.BUTTON,
    };
  }

  setCustomID(customID: string): this {
    (this.data as TextButton).customID = customID;
    return this;
  }

  setDisabled(disabled: boolean): this {
    this.data.disabled = disabled;
    return this;
  }

  setEmoji(emoji: NullablePartialEmoji): this {
    (this.data as TextButton).emoji = emoji;
    return this;
  }

  setLabel(label: string): this {
    (this.data as TextButton).label = label;
    return this;
  }

  setSkuID(skuID: string): this {
    (this.data as PremiumButton).skuID = skuID;
    return this;
  }

  setStyle(style: ButtonStyles): this {
    this.data.style = style;
    return this;
  }

  setURL(url: string): this {
    (this.data as URLButton).url = url;
    return this;
  }

  toJSON(inArray: true): [ButtonComponent];
  toJSON(inArray?: false): ButtonComponent;
  toJSON(inArray = false): ButtonComponent | ButtonComponent[] {
    return inArray ? [this.data as ButtonComponent] : (this.data as ButtonComponent);
  }
}
