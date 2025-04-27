import { parseEmoji } from "@functions/parseEmoji.js";
import type { NullablePartialEmoji, SelectOption } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class StringSelectMenuOptionBuilder extends BaseBuilder<SelectOption> {
  clear(option: AvailableClearOptions, force = false) {
    // biome-ignore lint/performance/noDelete:
    // biome-ignore lint/suspicious/noAssignInExpressions:
    force ? delete this.data[option] : (this.data[option] = undefined);

    return this;
  }

  setDefault(isDefault = true) {
    this.data.default = isDefault;

    return this;
  }

  setDescription(description: string) {
    this.data.description = description;

    return this;
  }

  setEmoji(emoji: NullablePartialEmoji | string) {
    this.data.emoji = typeof emoji === "string" ? parseEmoji(emoji) : emoji;

    return this;
  }

  setLabel(label: string) {
    this.data.label = label;

    return this;
  }

  setValue(value: string) {
    this.data.value = value;

    return this;
  }
}

type AvailableClearOptions = keyof Pick<SelectOption, "description" | "emoji">;
