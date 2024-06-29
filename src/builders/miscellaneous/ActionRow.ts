import { type ActionRowBase, ComponentTypes, type MessageActionRow } from "oceanic.js";
import type { Button } from "../interactions/Button";
import type { ChannelSelectMenu } from "../interactions/ChannelSelectMenu";
import type { MentionableSelectMenu } from "../interactions/MentionableSelectMenu";
import type { RoleSelectMenu } from "../interactions/RoleSelectMenu";
import type { StringSelectMenu } from "../interactions/StringSelectMenu";
import type { UserSelectMenu } from "../interactions/UserSelectMenu";
import { Component } from "./Component";

type ActionRowComponents =
  | Button
  | ChannelSelectMenu
  | MentionableSelectMenu
  | RoleSelectMenu
  | StringSelectMenu
  | UserSelectMenu;

export class ActionRow<T extends ActionRowComponents> extends Component<MessageActionRow> {
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

  toJSON(inArray: true): [MessageActionRow];
  toJSON(inArray?: false): MessageActionRow;
  toJSON(inArray = false): MessageActionRow | MessageActionRow[] {
    return inArray
      ? [
          {
            ...this.data,
            components: this.components.map((component) => component.toJSON()),
          } as ActionRowBase<ReturnType<T["toJSON"]>>,
        ]
      : ({
          ...this.data,
          components: this.components.map((component) => component.toJSON()),
        } as ActionRowBase<ReturnType<T["toJSON"]>>);
  }

  /** @deprecated Use toJSON(true) instead. */
  toJSONArray(): MessageActionRow[] {
    process.emitWarning(
      "toJSONArray is deprecated and will be removed in the next major, use toJSON(true) instead.",
      "ActionRow",
    );

    return this.toJSON(true);
  }
}
