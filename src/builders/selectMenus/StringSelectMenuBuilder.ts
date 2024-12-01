import { ComponentTypes, type NullablePartialEmoji, type SelectOption, type StringSelectMenu } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

const EMOJI_REGEX = /(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/;
const resolveOption = (option: ValidStringSelectMenuOption) => ("toJSON" in option ? option.toJSON() : option);
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

export class StringSelectMenuBuilder extends SelectMenuBaseBuilder<StringSelectMenu> {
  constructor(selectMenu?: Partial<StringSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.STRING_SELECT,
    });
  }

  addOptions(options: ValidStringSelectMenuOption[]) {
    const resolvedOptions = options.map((option) => resolveOption(option));

    this.data.options ??= [];
    this.data.options.push(...resolvedOptions);

    return this;
  }

  setOptions(options: ValidStringSelectMenuOption[]) {
    const resolvedOptions = options.map((option) => resolveOption(option));

    this.data.options = resolvedOptions;

    return this;
  }
}

type ValidStringSelectMenuOption = StringSelectMenuOptionBuilder | SelectOption;
type AvailableClearOptions = keyof Pick<SelectOption, "description" | "emoji">;
