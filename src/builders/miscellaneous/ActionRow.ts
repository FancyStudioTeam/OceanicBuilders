import { type ActionRowBase, ComponentTypes, type MessageActionRow } from "oceanic.js";
import type { ActionRowComponents, ActionRow as ActionRowType } from "../../types";
import { Component } from "./Component";

export class ActionRow<T extends ActionRowComponents> extends Component<MessageActionRow> implements ActionRowType<T> {
  components: T[];

  constructor({ components, ...init }: Partial<MessageActionRow> = {}) {
    super({
      type: ComponentTypes.ACTION_ROW,
      ...init,
    });

    this.components = [];
  }

  addComponent(component: T): this {
    this.components.push(component);
    return this;
  }

  addComponents(components: T[]): this {
    for (const component of components) {
      this.addComponent(component);
    }

    return this;
  }

  toJSON(): MessageActionRow {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON()),
    } as ActionRowBase<ReturnType<T["toJSON"]>>;
  }

  toJSONArray(): MessageActionRow[] {
    return [
      {
        ...this.data,
        components: this.components.map((component) => component.toJSON()),
      } as ActionRowBase<ReturnType<T["toJSON"]>>,
    ];
  }
}
