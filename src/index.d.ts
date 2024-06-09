import type {
  ButtonComponent,
  ButtonStyles,
  EmbedAuthorOptions,
  EmbedField,
  EmbedFooterOptions,
  EmbedOptions,
  NullablePartialEmoji,
} from "oceanic.js";

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
