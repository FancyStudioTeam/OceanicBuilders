import { type ActionRowBase, ComponentTypes, type MessageActionRow } from "oceanic.js";
import { Builder } from "./Builder";
import type { Button } from "./Button";
import type { ChannelSelectMenu } from "./ChannelSelectMenu";
import type { MentionableSelectMenu } from "./MentionableSelectMenu";
import type { RoleSelectMenu } from "./RoleSelectMenu";
import type { StringSelectMenu } from "./StringSelectMenu";
import type { UserSelectMenu } from "./UserSelectMenu";

type ActionRowComponents =
  | Button
  | ChannelSelectMenu
  | MentionableSelectMenu
  | RoleSelectMenu
  | StringSelectMenu
  | UserSelectMenu;

export class ActionRow<T extends ActionRowComponents> extends Builder<MessageActionRow> {
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
