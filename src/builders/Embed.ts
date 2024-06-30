import type { EmbedAuthorOptions, EmbedField, EmbedFooterOptions, EmbedOptions } from "oceanic.js";
import {
  embedAuthorVerifier,
  embedColorVerifier,
  embedDescriptionVerifier,
  embedFieldVerifier,
  embedFooterVerifier,
  embedTimestampVerifier,
  embedTitleVerifier,
  imageURLVerifier,
  urlVerifier,
  validate,
} from "../schemas";
import { Builder } from "./Builder";

export class Embed extends Builder<EmbedOptions> {
  constructor(embed?: Partial<EmbedOptions>) {
    super({
      ...embed,
    });
  }

  /** @deprecated Use addFields instead. */
  addField(field: EmbedField): this {
    process.emitWarning(
      "addField is deprecated and will be removed in the next major, use addFields instead.",
      "Embed",
    );

    this.data.fields = this.data.fields?.length ? [...this.data.fields, field] : [field];
    return this;
  }

  addFields(fields: EmbedField[]): this {
    for (const field of fields) {
      if (this.data.fields?.length) {
        this.data.fields.push(validate(embedFieldVerifier, field));
      } else {
        this.data.fields = [validate(embedFieldVerifier, field)];
      }
    }

    return this;
  }

  setAuthor(author: EmbedAuthorOptions): this {
    this.data.author = validate(embedAuthorVerifier, author);
    return this;
  }

  setColor(color: number): this {
    this.data.color = validate(embedColorVerifier, color);
    return this;
  }

  setDescription(description: string): this {
    this.data.description = validate(embedDescriptionVerifier, description);
    return this;
  }

  setFooter(footer: EmbedFooterOptions): this {
    this.data.footer = validate(embedFooterVerifier, footer);
    return this;
  }

  setImage(image: string): this {
    this.data.image = {
      url: validate(imageURLVerifier, image),
    };

    return this;
  }

  setThumbnail(thumbnail: string): this {
    this.data.thumbnail = {
      url: validate(imageURLVerifier, thumbnail),
    };

    return this;
  }

  setTimestamp(date?: Date): this {
    this.data.timestamp = date ? validate(embedTimestampVerifier, date).toISOString() : new Date().toISOString();
    return this;
  }

  setTitle(title: string): this {
    this.data.title = validate(embedTitleVerifier, title);
    return this;
  }

  setURL(url: string): this {
    this.data.url = validate(urlVerifier, url);
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
