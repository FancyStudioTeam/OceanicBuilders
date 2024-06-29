import {
  type ButtonComponent,
  type ButtonStyles,
  ComponentTypes,
  type NullablePartialEmoji,
  type PremiumButton,
  type TextButton,
  type URLButton,
} from "oceanic.js";
import {
  buttonLabelVerifier,
  buttonSkuIDVerifier,
  buttonStyleVerifier,
  customIDVerifier,
  disabledVerifier,
  partialEmojiVerifier,
  urlVerifier,
  validate,
  verifyButtonJSON,
  verifyExternalButtonJSON,
} from "../../schemas";
import { Component } from "../miscellaneous/Component";

export class Button extends Component<ButtonComponent> {
  constructor(button?: Partial<ButtonComponent>) {
    super({
      ...verifyExternalButtonJSON(button ?? {}),
      type: ComponentTypes.BUTTON,
    });
  }

  setCustomID(customID: string): this {
    (this.data as TextButton).customID = validate(customIDVerifier, customID);
    return this;
  }

  setDisabled(disabled: boolean): this {
    (this.data as TextButton).disabled = validate(disabledVerifier, disabled);
    return this;
  }

  setEmoji(emoji: NullablePartialEmoji): this {
    (this.data as TextButton).emoji = validate(partialEmojiVerifier, emoji);
    return this;
  }

  setLabel(label: string): this {
    (this.data as TextButton).label = validate(buttonLabelVerifier, label);
    return this;
  }

  setSkuID(skuID: string): this {
    (this.data as PremiumButton).skuID = validate(buttonSkuIDVerifier, skuID);
    return this;
  }

  setStyle(style: ButtonStyles): this {
    this.data.style = validate(buttonStyleVerifier, style);
    return this;
  }

  setURL(url: string): this {
    (this.data as URLButton).url = validate(urlVerifier, url);
    return this;
  }

  toJSON(inArray: true): [ButtonComponent];
  toJSON(inArray?: false): ButtonComponent;
  toJSON(inArray = false): ButtonComponent | ButtonComponent[] {
    verifyButtonJSON({
      style: this.data.style,
      label: (this.data as TextButton).label,
      emoji: (this.data as TextButton).emoji,
      customID: (this.data as TextButton).customID,
      skuID: (this.data as PremiumButton).skuID,
      url: (this.data as URLButton).url,
    });

    return inArray ? [this.data as ButtonComponent] : (this.data as ButtonComponent);
  }

  /** @deprecated Use toJSON(true) instead. */
  toJSONArray(): ButtonComponent[] {
    return this.toJSON(true);
  }
}
