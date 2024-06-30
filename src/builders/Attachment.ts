import type { File } from "oceanic.js";
import {
  attachmentContentVerifier,
  attachmentIndexVerifier,
  attachmentNameVerifier,
  validate,
  verifyAttachmentJSON,
} from "../schemas";
import { Builder } from "./base/Builder";

export class Attachment extends Builder<File> {
  constructor() {
    super({});
  }

  setContent(content: Buffer): this {
    this.data.contents = validate(attachmentContentVerifier, content);
    return this;
  }

  setIndex(index: number): this {
    this.data.index = validate(attachmentIndexVerifier, index);
    return this;
  }

  setName(name: string): this {
    this.data.name = validate(attachmentNameVerifier, name);
    return this;
  }

  toJSON(inArray: true): [File];
  toJSON(inArray?: false): File;
  toJSON(inArray = false): File | File[] {
    verifyAttachmentJSON({
      contents: this.data.contents,
      name: this.data.name,
    });

    return inArray ? [this.data as File] : (this.data as File);
  }

  /** @deprecated Use toJSON(true) instead. */
  toJSONArray(): File[] {
    process.emitWarning(
      "toJSONArray is deprecated and will be removed in the next major, use toJSON(true) instead.",
      "Attachment",
    );

    return this.toJSON(true);
  }
}
