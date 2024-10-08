import { ComponentTypes, type MessageActionRow } from "oceanic.js";
import type { JSONComponents, ValidComponents } from "../types.js";

export class ActionRow {
  components: JSONComponents[];

  constructor(actionRow?: Partial<MessageActionRow>) {
    const { components } = actionRow ?? {};

    this.components = components ?? [];
  }

  addComponents(components: ValidComponents[]): this {
    for (const component of components) {
      this.components.push("toJSON" in component ? component.toJSON() : component);
    }

    return this;
  }

  toJSON(inArray: true): [MessageActionRow];
  toJSON(inArray?: false): MessageActionRow;
  toJSON(inArray = false): MessageActionRow | MessageActionRow[] {
    const data = {
      type: ComponentTypes.ACTION_ROW,
      components: this.components,
    } as MessageActionRow;

    return inArray ? [data] : data;
  }
}
