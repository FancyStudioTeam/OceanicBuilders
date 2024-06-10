import type {
  ButtonComponent,
  ButtonStyles,
  EmbedAuthorOptions,
  EmbedField,
  EmbedFooterOptions,
  EmbedOptions,
  File,
  MessageActionRow,
  NullablePartialEmoji,
  TextInput,
  TextInputStyles,
  ChannelTypes,
  SelectMenuComponent,
  SelectMenuDefaultValue,
  SelectOption,
} from "oceanic.js";

export class ActionRowBuilder {
  addComponents(components: ButtonBuilder[]): this;
  toJSON(): MessageActionRow;
  toJSONArray(): MessageActionRow[];
}

export class AttachmentBuilder {
  setContent(content: Buffer): this;
  setName(name: string): this;
  setIndex(index: number): this;
  toJSON(): File;
  toJSONArray(): File[];
}

export class ButtonBuilder {
  constructor(button?: ButtonComponent);
  setCustomID(id: string): this;
  setDisabled(disabled: boolean): this;
  setEmoji(emoji: NullablePartialEmoji): this;
  setLabel(label: string): this;
  setStyle(style: ButtonStyles): this;
  setURL(url: string): this;
  toJSON(): ButtonComponent;
}

export class SelectMenuBuilder {
  setChannelTypes(types: ChannelTypes[]): this;
  setCustomID(id: string): this;
  setDefaultValues(values: SelectMenuDefaultValue[]): this;
  setDisabled(disabled: boolean): this;
  setMaxValues(value: number): this;
  setMinValues(value: number): this;
  addOptions(components: SelectOption[]): this;
  setPlaceholder(placeholder: string): this;
  setType(type: ValidType): this;
  toJSON(): SelectMenuComponent;
}

export class EmbedBuilder {
  constructor(embed?: EmbedOptions);
  setAuthor(author: EmbedAuthorOptions): this;
  setColor(color: number): this;
  setDescription(description: string): this;
  addField(field: EmbedField): this;
  addFields(fields: EmbedField[]): this;
  setFooter(footer: EmbedFooterOptions): this;
  setImage(image: string): this;
  setThumbnail(thumbnail: string): this;
  setTimestamp(): this;
  setTitle(title: string): this;
  setURL(url: string): this;
  toJSON(): EmbedOptions;
  toJSONArray(): EmbedOptions[];
}

export class TextInputBuilder {
  constructor(textInput?: TextInput);
  setCustomID(id: string): this;
  setLabel(label: string): this;
  setMaxLength(maxLength: number): this;
  setMinLength(minLength: number): this;
  setPlaceholder(placeholder: string): this;
  setRequired(required: boolean): this;
  setStyle(style: TextInputStyles): this;
  setValue(value: string): this;
  toJSON(): TextInput;
}
