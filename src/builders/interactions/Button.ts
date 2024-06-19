import {
  type ButtonComponent,
  type ButtonStyles,
  ComponentTypes,
  type NullablePartialEmoji,
  type TextButton,
  type URLButton,
} from "oceanic.js";
import {
  buttonLabelValidator,
  buttonStyleValidator,
  customIDValidator,
  disabledValidator,
  partialEmojiValidator,
  urlValidator,
  validate,
  validateButton,
} from "../../schemas";
import type { Button as ButtonType } from "../../types";
import { Component } from "../miscellaneous/Component";

export class Button extends Component<ButtonComponent> implements ButtonType {
  constructor(button?: Partial<ButtonComponent>) {
    super({
      ...button,
      type: ComponentTypes.BUTTON,
    });
  }

  setCustomID(customID: string): this {
    (this.data as TextButton).customID = validate(customIDValidator, customID);
    return this;
  }

  setDisabled(disabled: boolean): this {
    this.data.disabled = validate(disabledValidator, disabled);
    return this;
  }

  setEmoji(emoji: NullablePartialEmoji): this {
    this.data.emoji = validate(partialEmojiValidator, emoji);
    return this;
  }

  setLabel(label: string): this {
    this.data.label = validate(buttonLabelValidator, label);
    return this;
  }

  setStyle(style: ButtonStyles): this {
    this.data.style = validate(buttonStyleValidator, style);
    return this;
  }

  setURL(url: string): this {
    (this.data as URLButton).url = validate(urlValidator, url);
    return this;
  }

  toJSON(): ButtonComponent {
    validateButton({
      customID: (this.data as TextButton).customID,
      label: this.data.label,
      emoji: this.data.emoji,
      style: this.data.style,
      url: (this.data as URLButton).url,
    });

    return this.data as ButtonComponent;
  }

  toJSONArray(): ButtonComponent[] {
    validateButton({
      customID: (this.data as TextButton).customID,
      label: this.data.label,
      emoji: this.data.emoji,
      style: this.data.style,
      url: (this.data as URLButton).url,
    });

    return [this.data as ButtonComponent];
  }
}
