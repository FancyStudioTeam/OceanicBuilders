import { parseEmoji } from "@functions/parseEmoji.js";
import type { NullablePartialEmoji, PollMedia } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class PollMediaBuilder extends BaseBuilder<PollMedia> {
  setEmoji(emoji: NullablePartialEmoji | string) {
    this.data.emoji = typeof emoji === "string" ? parseEmoji(emoji) : emoji;

    return this;
  }

  setText(text: string) {
    this.data.text = text;

    return this;
  }
}
