import type { ButtonStyles, NullablePartialEmoji, TextButton, URLButton } from "oceanic.js";
import { ButtonBaseBuilder } from "./ButtonBaseBuilder.js";

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

  setEmoji(emoji: NullablePartialEmoji) {
    this.data.emoji = emoji;

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
