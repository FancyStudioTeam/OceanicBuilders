import { ComponentTypes, type MessageActionRow } from "oceanic.js";
import type { JSONComponents, ValidComponents } from "../types";

export class ActionRow {
  components: JSONComponents[];

  constructor() {
    this.components = [];
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
    return inArray
      ? [
          {
            type: ComponentTypes.ACTION_ROW,
            components: this.components,
          },
        ]
      : {
          type: ComponentTypes.ACTION_ROW,
          components: this.components,
        };
  }
}
