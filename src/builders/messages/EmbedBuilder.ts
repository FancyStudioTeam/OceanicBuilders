import { type RestOrArray, normalizeArray } from "@functions/normalizeArray.js";
import type { EmbedAuthorOptions, EmbedField, EmbedFooterOptions, EmbedOptions } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import { EmbedFieldBuilder } from "./EmbedFieldBuilder.js";

const resolveEmbedField = (embedField: ValidEmbedField) =>
  embedField instanceof EmbedFieldBuilder ? embedField.toJSON() : embedField;

export class EmbedBuilder extends BaseBuilder<EmbedOptions> {
  addFields(...fields: RestOrArray<ValidEmbedField>) {
    const normalizedArray = normalizeArray(fields);
    const resolvedFields = normalizedArray.map((field) => resolveEmbedField(field));

    this.data.fields ??= [];
    this.data.fields.push(...resolvedFields);

    return this;
  }

  clear(option: AvailableClearOptions, force = false) {
    // biome-ignore lint/performance/noDelete:
    // biome-ignore lint/suspicious/noAssignInExpressions:
    force ? delete this.data[option] : (this.data[option] = undefined);

    return this;
  }

  setAuthor(author: EmbedAuthorOptions | string) {
    this.data.author =
      typeof author === "string"
        ? {
            name: author,
          }
        : author;

    return this;
  }

  setColor(color: number) {
    this.data.color = color;

    return this;
  }

  setDescription(description: string) {
    this.data.description = description;

    return this;
  }

  setFields(...fields: RestOrArray<ValidEmbedField>) {
    const normalizedArray = normalizeArray(fields);
    const resolvedFields = normalizedArray.map((field) => resolveEmbedField(field));

    this.data.fields = resolvedFields;

    return this;
  }

  setFooter(footer: EmbedFooterOptions | string) {
    this.data.footer =
      typeof footer === "string"
        ? {
            text: footer,
          }
        : footer;

    return this;
  }

  setImage(image: string) {
    this.data.image = {
      url: image,
    };

    return this;
  }

  setThumbnail(thumbnail: string) {
    this.data.thumbnail = {
      url: thumbnail,
    };

    return this;
  }

  setTimestamp(timestamp: "now" | Date | string = "now") {
    if (timestamp === "now") {
      this.data.timestamp = new Date().toISOString();
    } else if (timestamp instanceof Date) {
      this.data.timestamp = timestamp.toISOString();
    } else {
      this.data.timestamp = timestamp;
    }

    return this;
  }

  setTitle(title: string) {
    this.data.title = title;

    return this;
  }

  setURL(url: string) {
    this.data.url = url;

    return this;
  }
}

type AvailableClearOptions = keyof EmbedOptions;
export type ValidEmbedField = EmbedFieldBuilder | EmbedField;
