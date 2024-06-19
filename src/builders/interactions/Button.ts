import {
  type ButtonComponent,
  ButtonStyles,
  ComponentTypes,
  type NullablePartialEmoji,
  type TextButton,
  type URLButton,
} from "oceanic.js";
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
    if (this.data.style !== ButtonStyles.LINK) {
      (this.data as TextButton).customID = customID;
    } else {
      throw new Error('Cannot use "setCustomID" with "LINK" style');
    }

    return this;
  }

  setDisabled(disabled: boolean): this {
    this.data.disabled = disabled;
    return this;
  }

  setEmoji(emoji: NullablePartialEmoji): this {
    this.data.emoji = emoji;
    return this;
  }

  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  setStyle(style: ButtonStyles): this {
    this.data.style = style;
    return this;
  }

  setURL(url: string): this {
    if (this.data.style === ButtonStyles.LINK) {
      (this.data as URLButton).url = url;
    } else {
      throw new Error('Cannot use "setURL" without "LINK" style');
    }

    return this;
  }

  toJSON(): ButtonComponent {
    return this.data as ButtonComponent;
  }

  toJSONArray(): ButtonComponent[] {
    return [this.data as ButtonComponent];
  }
}
