import {
  type ChannelSelectMenu,
  ComponentTypes,
  type MentionableSelectMenu,
  type MessageActionRow,
  type RoleSelectMenu,
  type StringSelectMenu,
  type TextButton,
  type UserSelectMenu,
} from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import type { DangerButtonBuilder } from "../buttons/DangerButtonBuilder.js";
import type { PrimaryButtonBuilder } from "../buttons/PrimaryButtonBuilder.js";
import type { SecondaryButtonBuilder } from "../buttons/SecondaryButtonBuilder.js";
import type { SuccessButtonBuilder } from "../buttons/SuccessButtonBuilder.js";
import type { ChannelSelectMenuBuilder } from "../selectMenus/ChannelSelectMenuBuilder.js";
import type { MentionableSelectMenuBuilder } from "../selectMenus/MentionableSelectMenuBuilder.js";
import type { RoleSelectMenuBuilder } from "../selectMenus/RoleSelectMenuBuilder.js";
import type { StringSelectMenuBuilder } from "../selectMenus/StringSelectMenuBuilder.js";
import type { UserSelectMenuBuilder } from "../selectMenus/UserSelectMenuBuilder.js";

const resolveComponents = (component: ValidActionRowComponents) =>
  "toJSON" in component ? component.toJSON() : component;

export class ActionRowBuilder extends BaseBuilder<MessageActionRow> {
  constructor(actionRow?: Partial<MessageActionRow>) {
    super({
      ...actionRow,
      type: ComponentTypes.ACTION_ROW,
    });
  }

  addComponents(components: ValidActionRowComponents[]) {
    const resolvedComponents = components.map((component) => resolveComponents(component));

    this.data.components ??= [];
    this.data.components.push(...resolvedComponents);

    return this;
  }

  setComponents(components: ValidActionRowComponents[]) {
    const resolvedComponents = components.map((component) => resolveComponents(component));

    this.data.components = resolvedComponents;

    return this;
  }
}

type ValidDangerButton = DangerButtonBuilder | TextButton;
type ValidPrimaryButton = PrimaryButtonBuilder | TextButton;
type ValidSecondaryButton = SecondaryButtonBuilder | TextButton;
type ValidSuccessButton = SuccessButtonBuilder | TextButton;

type ValidChannelSelectMenu = ChannelSelectMenuBuilder | ChannelSelectMenu;
type ValidMentionableSelectMenu = MentionableSelectMenuBuilder | MentionableSelectMenu;
type ValidRoleSelectMenu = RoleSelectMenuBuilder | RoleSelectMenu;
type ValidStringSelectMenu = StringSelectMenuBuilder | StringSelectMenu;
type ValidUserSelectMenu = UserSelectMenuBuilder | UserSelectMenu;

type ValidActionRowComponents =
  | ValidChannelSelectMenu
  | ValidDangerButton
  | ValidMentionableSelectMenu
  | ValidPrimaryButton
  | ValidRoleSelectMenu
  | ValidSecondaryButton
  | ValidStringSelectMenu
  | ValidSuccessButton
  | ValidUserSelectMenu;
