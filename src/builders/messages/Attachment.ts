import type { File } from "oceanic.js";
import { attachmentContentValidator, attachmentIndexValidator, attachmentNameValidator, validate } from "../../schemas";
import type { Attachment as AttachmentType } from "../../types";

export class Attachment implements AttachmentType {
  private json: Partial<File>;

  constructor() {
    this.json = {};
  }

  setContent(content: Buffer): this {
    this.json.contents = validate(attachmentContentValidator, content);
    return this;
  }

  setIndex(index: number): this {
    this.json.index = validate(attachmentIndexValidator, index);
    return this;
  }

  setName(name: string): this {
    this.json.name = validate(attachmentNameValidator, name);
    return this;
  }

  toJSON(): File {
    return this.json as File;
  }

  toJSONArray(): File[] {
    return [this.json as File];
  }
}
