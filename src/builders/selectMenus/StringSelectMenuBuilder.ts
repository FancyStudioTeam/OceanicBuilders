import { type RestOrArray, normalizeArray } from "@utils";
import { ComponentTypes, type SelectOption, type StringSelectMenu } from "oceanic.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";
import { StringSelectMenuOptionBuilder } from "./StringSelectMenuOptionBuilder.js";

const resolveOption = (option: ValidStringSelectMenuOption) =>
  option instanceof StringSelectMenuOptionBuilder ? option.toJSON() : option;

export class StringSelectMenuBuilder extends SelectMenuBaseBuilder<StringSelectMenu> {
  constructor(selectMenu?: Partial<StringSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.STRING_SELECT,
    });
  }

  addOptions(...options: RestOrArray<ValidStringSelectMenuOption>) {
    const normalizedArray = normalizeArray(options);
    const resolvedOptions = normalizedArray.map((option) => resolveOption(option));

    this.data.options ??= [];
    this.data.options.push(...resolvedOptions);

    return this;
  }

  setOptions(...options: RestOrArray<ValidStringSelectMenuOption>) {
    const normalizedArray = normalizeArray(options);
    const resolvedOptions = normalizedArray.map((option) => resolveOption(option));

    this.data.options = resolvedOptions;

    return this;
  }
}

export type ValidStringSelectMenuOption = StringSelectMenuOptionBuilder | SelectOption;
