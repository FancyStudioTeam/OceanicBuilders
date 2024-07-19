import type { EmbedAuthorOptions, EmbedFooterOptions, EmbedOptions, EmbedField as OceanicEmbedField } from "oceanic.js";
import type { ValidEmbedField } from "../types";

export class EmbedField {
  data: Partial<OceanicEmbedField>;

  constructor() {
    this.data = {};
  }

  setInline(inline: boolean): this {
    this.data.inline = inline;
    return this;
  }

  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  toJSON(inArray: true): [OceanicEmbedField];
  toJSON(inArray?: false): OceanicEmbedField;
  toJSON(inArray = false): OceanicEmbedField | OceanicEmbedField[] {
    return inArray ? [this.data as OceanicEmbedField] : (this.data as OceanicEmbedField);
  }
}

export class Embed {
  data: Partial<EmbedOptions>;
  fields: OceanicEmbedField[];

  constructor(embed?: Partial<EmbedOptions>) {
    this.data = {
      ...embed,
    };
    this.fields = [];
  }

  addFields(fields: ValidEmbedField[]): this {
    for (const field of fields) {
      this.fields.push("toJSON" in field ? field.toJSON() : field);
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
    return inArray
      ? [
          {
            ...this.data,
            fields: this.fields,
          },
        ]
      : {
          ...this.data,
          fields: this.fields,
        };
  }
}
