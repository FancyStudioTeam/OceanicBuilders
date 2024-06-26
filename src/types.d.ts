import type {
  ButtonComponent,
  ButtonStyles,
  ChannelTypes,
  EmbedAuthorOptions,
  EmbedField,
  EmbedFooterOptions,
  EmbedOptions,
  File,
  MessageActionRow,
  NullablePartialEmoji,
  ChannelSelectMenu as OceanicChannelSelectMenu,
  MentionableSelectMenu as OceanicMentionableSelectMenu,
  RoleSelectMenu as OceanicRoleSelectMenu,
  StringSelectMenu as OceanicStringSelectMenu,
  UserSelectMenu as OceanicUserSelectMenu,
  SelectMenuDefaultValue,
  SelectOption,
} from "oceanic.js";

type ActionRowComponents =
  | Button
  | ChannelSelectMenu
  | MentionableSelectMenu
  | RoleSelectMenu
  | StringSelectMenu
  | UserSelectMenu;

export class ActionRow<T extends ActionRowComponents> {
  addComponent(component: T): this;
  addComponents(components: T[]): this;
  toJSON(): MessageActionRow;
  toJSONArray(): MessageActionRow[];
}

export class Attachment {
  setContent(content: Buffer): this;
  setIndex(index: number): this;
  setName(name: string): this;
  toJSON(): File;
  toJSONArray(): File[];
}

export class Button {
  constructor(button?: Partial<ButtonComponent>);
  setCustomID(customID: string): this;
  setDisabled(disabled: boolean): this;
  setEmoji(emoji: NullablePartialEmoji): this;
  setLabel(label: string): this;
  setSkuID(skuID: string): this;
  setStyle(style: ButtonStyles): this;
  setURL(url: string): this;
  toJSON(): ButtonComponent;
  toJSONArray(): ButtonComponent[];
}

export class ChannelSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicChannelSelectMenu>);
  setChannelTypes(channelTypes: ChannelTypes[]): this;
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicChannelSelectMenu;
  toJSONArray(): OceanicChannelSelectMenu[];
}

export class Embed {
  constructor(embed?: EmbedOptions);
  addField(field: EmbedField): this;
  addFields(fields: EmbedField[]): this;
  setAuthor(author: EmbedAuthorOptions): this;
  setColor(color: number): this;
  setDescription(description: string): this;
  setFooter(footer: EmbedFooterOptions): this;
  setImage(image: string): this;
  setThumbnail(thumbnail: string): this;
  setTimestamp(date?: Date): this;
  setTitle(title: string): this;
  setURL(url: string): this;
  toJSON(): EmbedOptions;
  toJSONArray(): EmbedOptions[];
}

export class MentionableSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicMentionableSelectMenu>);
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicMentionableSelectMenu;
  toJSONArray(): OceanicMentionableSelectMenu[];
}

export class RoleSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicRoleSelectMenu>);
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicRoleSelectMenu;
  toJSONArray(): OceanicRoleSelectMenu[];
}

class SelectMenu {
  setCustomID(customID: string): this;
  setDisabled(disabled: boolean): this;
  setMaxValues(maxValue: number): this;
  setMinValues(minValue: number): this;
  setPlaceholder(placeholder: string): this;
}

export class StringSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicStringSelectMenu>);
  addOption(option: SelectOption): this;
  addOptions(options: SelectOption[]): this;
  toJSON(): OceanicStringSelectMenu;
  toJSONArray(): OceanicStringSelectMenu[];
}

export class UserSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicUserSelectMenu>);
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicUserSelectMenu;
  toJSONArray(): OceanicUserSelectMenu[];
}
