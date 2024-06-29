import type { EmbedAuthorOptions, EmbedField, EmbedFooterOptions, EmbedOptions } from "oceanic.js";

export class Embed {
  private json: EmbedOptions;

  constructor(embed: EmbedOptions = {}) {
    this.json = embed;
  }

  addField(field: EmbedField): this {
    this.json.fields = this.json.fields?.length ? [...this.json.fields, field] : [field];
    return this;
  }

  addFields(fields: EmbedField[]): this {
    for (const field of fields) {
      this.addField(field);
    }

    return this;
  }

  setAuthor(author: EmbedAuthorOptions): this {
    this.json.author = author;
    return this;
  }

  setColor(color: number): this {
    this.json.color = color;
    return this;
  }

  setDescription(description: string): this {
    this.json.description = description;
    return this;
  }

  setFooter(footer: EmbedFooterOptions): this {
    this.json.footer = footer;
    return this;
  }

  setImage(image: string): this {
    this.json.image = {
      url: image,
    };

    return this;
  }

  setThumbnail(thumbnail: string): this {
    this.json.thumbnail = {
      url: thumbnail,
    };

    return this;
  }

  setTimestamp(date?: Date): this {
    this.json.timestamp = date?.toISOString() ?? new Date().toISOString();
    return this;
  }

  setTitle(title: string): this {
    this.json.title = title;
    return this;
  }

  setURL(url: string): this {
    this.json.url = url;
    return this;
  }

  toJSON(inArray: true): [EmbedOptions];
  toJSON(inArray?: false): EmbedOptions;
  toJSON(inArray = false): EmbedOptions | EmbedOptions[] {
    return inArray ? [this.json] : this.json;
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
