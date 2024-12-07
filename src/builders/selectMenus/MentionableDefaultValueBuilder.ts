import type { SelectMenuDefaultValue, SelectMenuDefaultValueTypes } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class MentionableDefaultValueBuilder extends BaseBuilder<SelectMenuDefaultValue> {
  setMentionableID(mentionableID: string) {
    this.data.id = mentionableID;

    return this;
  }

  setType(type: SelectMenuDefaultValueTypes) {
    this.data.type = type;

    return this;
  }
}
