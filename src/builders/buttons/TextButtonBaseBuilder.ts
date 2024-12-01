import type { ButtonStyles, NullablePartialEmoji, TextButton, URLButton } from "oceanic.js";
import { ButtonBaseBuilder } from "./ButtonBaseBuilder.js";

const EMOJI_REGEX = /(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/;
const parseEmoji = (emoji: string, type: "default" | "custom" = "custom"): NullablePartialEmoji => {
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

export class TextButtonBaseBuilder<T extends ButtonStyles> extends ButtonBaseBuilder<
  TextButtonBaseBuilderWithButtonStyleType<T>
> {
  constructor(button?: Partial<TextButtonBaseBuilderWithButtonStyleType<T>>) {
    const init = button as Partial<TextButtonBaseBuilderWithButtonStyleType<T>>;

    super({
      ...init,
    });
  }

  clear(option: AvailableClearOptions, force = false) {
    // biome-ignore lint/performance/noDelete:
    // biome-ignore lint/suspicious/noAssignInExpressions:
    force ? delete this.data[option] : (this.data[option] = undefined);

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
}

type TextButtonBaseBuilderWithButtonStyleType<T extends ButtonStyles> = T extends ButtonStyles.LINK
  ? URLButton & {
      style: T;
    }
  : TextButton & {
      style: T;
    };

type ButtonsWithEmojisAndLabels = TextButton | URLButton;
type AvailableClearOptions = keyof Pick<ButtonsWithEmojisAndLabels, "emoji" | "label">;
