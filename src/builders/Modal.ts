import { ComponentTypes, type ModalActionRow, type ModalData } from "oceanic.js";
import type { ValidTextInput } from "../types";

export class Modal {
  data: Partial<ModalData>;
  components: ModalActionRow[];

  constructor() {
    this.data = {};
    this.components = [];
  }

  setCustomID(customID: string): this {
    this.data.customID = customID;
    return this;
  }

  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  addComponents(components: ValidTextInput[]): this {
    for (const component of components) {
      this.components.push({
        type: ComponentTypes.ACTION_ROW,
        components: ["toJSON" in component ? component.toJSON() : component],
      });
    }

    return this;
  }
}
