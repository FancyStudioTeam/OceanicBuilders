import { ButtonStyles, type TextButton } from "oceanic.js";
import { TextButtonBaseBuilder } from "./TextButtonBaseBuilder.js";

export class PrimaryButtonBuilder extends TextButtonBaseBuilder<ButtonStyles.PRIMARY> {
  constructor(button?: Partial<TextButton>) {
    super({
      ...button,
      style: ButtonStyles.PRIMARY,
    });
  }

  setCustomID(customID: string) {
    this.data.customID = customID;

    return this;
  }
}
