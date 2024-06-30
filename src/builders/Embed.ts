import type { EmbedAuthorOptions, EmbedField, EmbedFooterOptions, EmbedOptions } from "oceanic.js";
import { Builder } from "./Builder";

export class Embed extends Builder<EmbedOptions> {
  constructor(embed?: Partial<EmbedOptions>) {
    super({
      ...embed,
    });
  }

  addField(field: EmbedField): this {
    this.data.fields = this.data.fields?.length ? [...this.data.fields, field] : [field];
    return this;
  }

  addFields(fields: EmbedField[]): this {
    for (const field of fields) {
      this.addField(field);
    }

    return this;
  }

  setAuthor(author: EmbedAuthorOptions): this {
    this.data.author = author;
    return this;
  }

  setColor(color: number): this {
    this.data.color = color;
    return this;
  }

  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  setFooter(footer: EmbedFooterOptions): this {
    this.data.footer = footer;
    return this;
  }

  setImage(image: string): this {
    this.data.image = {
      url: image,
    };

    return this;
  }

  setThumbnail(thumbnail: string): this {
    this.data.thumbnail = {
      url: thumbnail,
    };

    return this;
  }

  setTimestamp(date?: Date): this {
    this.data.timestamp = date?.toISOString() ?? new Date().toISOString();
    return this;
  }

  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  setURL(url: string): this {
    this.data.url = url;
    return this;
  }

  toJSON(inArray: true): [EmbedOptions];
  toJSON(inArray?: false): EmbedOptions;
  toJSON(inArray = false): EmbedOptions | EmbedOptions[] {
    return inArray ? [this.data] : this.data;
  }

  /** @deprecated Use toJSON(true) instead. */
  toJSONArray(): EmbedOptions[] {
    process.emitWarning(
      "toJSONArray is deprecated and will be removed in the next major, use toJSON(true) instead.",
      "Embed",
    );

    return this.toJSON(true);
  }
}
