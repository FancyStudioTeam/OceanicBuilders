import type { NullablePartialEmoji } from "oceanic.js";

const EMOJI_REGEX = /(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/;

export const parseEmoji = (emoji: string, type: "default" | "custom" = "custom"): NullablePartialEmoji => {
  if (type === "default") {
    return {
      name: emoji,
    };
  }

  const match = emoji.match(EMOJI_REGEX) ?? [];
  const [, , name, id] = match;

  if (!(name && id)) {
    return parseEmoji(emoji, "default");
  }

  return {
    name,
    id,
  };
};
