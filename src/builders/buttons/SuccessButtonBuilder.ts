import { ButtonStyles, type TextButton } from "oceanic.js";
import { TextButtonBaseBuilder } from "./TextButtonBaseBuilder.js";

export class SuccessButtonBuilder extends TextButtonBaseBuilder<ButtonStyles.SUCCESS> {
  constructor(button?: Partial<TextButton>) {
    super({
      ...button,
      style: ButtonStyles.SUCCESS,
    });
  }

  setCustomID(customID: string) {
    this.data.customID = customID;

    return this;
  }
}
