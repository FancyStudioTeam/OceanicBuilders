import { ButtonStyles, type TextButton } from "oceanic.js";
import { TextButtonBaseBuilder } from "./TextButtonBaseBuilder.js";

export class SecondaryButtonBuilder extends TextButtonBaseBuilder<ButtonStyles.SECONDARY> {
  constructor(button?: Partial<TextButton>) {
    super({
      ...button,
      style: ButtonStyles.SECONDARY,
    });
  }

  setCustomID(customID: string) {
    this.data.customID = customID;

    return this;
  }
}
