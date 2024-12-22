import { type RestOrArray, normalizeArray } from "@utils";
import {
  type ChannelSelectMenu,
  ComponentTypes,
  type MentionableSelectMenu,
  type MessageActionRow,
  type PremiumButton,
  type RoleSelectMenu,
  type StringSelectMenu,
  type TextButton,
  type URLButton,
  type UserSelectMenu,
} from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import type { DangerButtonBuilder } from "../buttons/DangerButtonBuilder.js";
import type { LinkButtonBuilder } from "../buttons/LinkButtonBuilder.js";
import type { PremiumButtonBuilder } from "../buttons/PremiumButtonBuilder.js";
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

  addComponents(...components: RestOrArray<ValidActionRowComponents>) {
    const normalizedArray = normalizeArray(components);
    const resolvedComponents = normalizedArray.map((component) => resolveComponents(component));

    this.data.components ??= [];
    this.data.components.push(...resolvedComponents);

    return this;
  }

  setComponents(...components: RestOrArray<ValidActionRowComponents>) {
    const normalizedArray = normalizeArray(components);
    const resolvedComponents = normalizedArray.map((component) => resolveComponents(component));

    this.data.components = resolvedComponents;

    return this;
  }
}

type ValidDangerButton = DangerButtonBuilder | TextButton;
type ValidLinkButton = LinkButtonBuilder | URLButton;
type ValidPremiumButton = PremiumButtonBuilder | PremiumButton;
type ValidPrimaryButton = PrimaryButtonBuilder | TextButton;
type ValidSecondaryButton = SecondaryButtonBuilder | TextButton;
type ValidSuccessButton = SuccessButtonBuilder | TextButton;

type ValidChannelSelectMenu = ChannelSelectMenuBuilder | ChannelSelectMenu;
type ValidMentionableSelectMenu = MentionableSelectMenuBuilder | MentionableSelectMenu;
type ValidRoleSelectMenu = RoleSelectMenuBuilder | RoleSelectMenu;
type ValidStringSelectMenu = StringSelectMenuBuilder | StringSelectMenu;
type ValidUserSelectMenu = UserSelectMenuBuilder | UserSelectMenu;

type ValidButtons =
  | ValidDangerButton
  | ValidLinkButton
  | ValidPremiumButton
  | ValidPrimaryButton
  | ValidSecondaryButton
  | ValidSuccessButton;
type ValidSelectMenus =
  | ValidChannelSelectMenu
  | ValidMentionableSelectMenu
  | ValidRoleSelectMenu
  | ValidStringSelectMenu
  | ValidUserSelectMenu;

export type ValidActionRowComponents = ValidButtons | ValidSelectMenus;
