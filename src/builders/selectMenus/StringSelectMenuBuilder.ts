import { parseEmoji } from "@utils";
import { ComponentTypes, type NullablePartialEmoji, type SelectOption, type StringSelectMenu } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

const resolveOption = (option: ValidStringSelectMenuOption) => ("toJSON" in option ? option.toJSON() : option);

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

type AvailableClearOptions = keyof Pick<SelectOption, "description" | "emoji">;
export type ValidStringSelectMenuOption = StringSelectMenuOptionBuilder | SelectOption;
