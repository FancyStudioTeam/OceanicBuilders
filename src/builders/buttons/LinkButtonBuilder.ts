import { ButtonStyles, type URLButton } from "oceanic.js";
import { TextButtonBaseBuilder } from "./TextButtonBaseBuilder.js";

export class LinkButtonBuilder extends TextButtonBaseBuilder<ButtonStyles.LINK> {
  constructor(button?: Partial<URLButton>) {
    super({
      ...button,
      style: ButtonStyles.LINK,
    });
  }

  setURL(url: string) {
    this.data.url = url;

    return this;
  }
}
