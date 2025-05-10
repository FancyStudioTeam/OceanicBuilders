import type { NullablePartialEmoji } from "oceanic.js";

const EMOJI_REGEX = /(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/;

/**
 * Parses a string emoji into a NullablePartialEmoji object.
 * @param emoji - The string emoji to parse.
 * @param type - The type of emoji to parse. Default to `custom`.
 * @returns The resolved `NullablePartialEmoji` object.
 * @throws A `TypeError` if `emoji` or `type` are not a string.
 */
export const parseEmoji = (emoji: string, type: "default" | "custom" = "custom"): NullablePartialEmoji => {
  if (typeof emoji !== "string") {
    throw new TypeError("'emoji' argument must be a string.");
  }

  if ((type && typeof type !== "string") || !["default", "custom"].includes(type)) {
    throw new TypeError("'type' argument must be 'default' or 'custom'.");
  }

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
