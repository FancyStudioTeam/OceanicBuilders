import { type RestOrArray, normalizeArray } from "@functions/normalizeArray.js";
import { ComponentTypes, type SelectMenuDefaultValue, type UserSelectMenu } from "oceanic.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

export class UserSelectMenuBuilder extends SelectMenuBaseBuilder<UserSelectMenu> {
  constructor(selectMenu?: Partial<UserSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.USER_SELECT,
    });
  }

  addDefaultUsers(...userIDs: RestOrArray<string>) {
    const normalizedArray = normalizeArray(userIDs);
    const defaultValues = normalizedArray.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "user",
    }));

    this.data.defaultValues ??= [];
    this.data.defaultValues.push(...defaultValues);

    return this;
  }

  setDefaultUsers(...userIDs: RestOrArray<string>) {
    const normalizedArray = normalizeArray(userIDs);
    const defaultValues = normalizedArray.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "user",
    }));

    this.data.defaultValues = defaultValues;

    return this;
  }
}
