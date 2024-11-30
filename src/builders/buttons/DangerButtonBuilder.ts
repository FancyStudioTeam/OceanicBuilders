import { ButtonStyles, type TextButton } from "oceanic.js";
import { TextButtonBaseBuilder } from "./TextButtonBaseBuilder.js";

export class DangerButtonBuilder extends TextButtonBaseBuilder<ButtonStyles.DANGER> {
  constructor(button?: Partial<TextButton>) {
    super({
      ...button,
      style: ButtonStyles.DANGER,
    });
  }

  setCustomID(customID: string) {
    this.data.customID = customID;

    return this;
  }
}
