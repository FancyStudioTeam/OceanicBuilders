import { type RestOrArray, normalizeArray } from "@functions/normalizeArray.js";
import { ComponentTypes, type MentionableSelectMenu, type SelectMenuDefaultValue } from "oceanic.js";
import { MentionableDefaultValueBuilder } from "./MentionableDefaultValueBuilder.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

const resolveDefaultValue = (defaultValue: ValidMentionableDefaultValue) =>
  defaultValue instanceof MentionableDefaultValueBuilder ? defaultValue.toJSON() : defaultValue;

export class MentionableSelectMenuBuilder extends SelectMenuBaseBuilder<MentionableSelectMenu> {
  constructor(selectMenu?: Partial<MentionableSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.MENTIONABLE_SELECT,
    });
  }

  addDefaultValues(...defaultValues: RestOrArray<ValidMentionableDefaultValue>) {
    const normalizedArray = normalizeArray(defaultValues);
    const resolvedDefaultValues = normalizedArray.map((defaultValue) => resolveDefaultValue(defaultValue));

    this.data.defaultValues ??= [];
    this.data.defaultValues.push(...resolvedDefaultValues);

    return this;
  }

  setDefaultValues(...defaultValues: RestOrArray<ValidMentionableDefaultValue>) {
    const normalizedArray = normalizeArray(defaultValues);
    const resolvedDefaultValues = normalizedArray.map((defaultValue) => resolveDefaultValue(defaultValue));

    this.data.defaultValues = resolvedDefaultValues;

    return this;
  }
}

export type ValidMentionableDefaultValue = MentionableDefaultValueBuilder | SelectMenuDefaultValue;
