import type { EmbedField } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class EmbedFieldBuilder extends BaseBuilder<EmbedField> {
  setInline(isInline = true) {
    this.data.inline = isInline;

    return this;
  }

  setName(name: string) {
    this.data.name = name;

    return this;
  }

  setValue(value: string) {
    this.data.value = value;

    return this;
  }
}
