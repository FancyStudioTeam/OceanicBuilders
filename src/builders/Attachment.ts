import type { File } from "oceanic.js";

export class Attachment {
  data: Partial<File>;

  constructor() {
    this.data = {};
  }

  setContents(contents: Buffer): this {
    this.data.contents = contents;
    return this;
  }

  setIndex(index: number): this {
    this.data.index = index;
    return this;
  }

  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  toJSON(inArray: true): [File];
  toJSON(inArray?: false): File;
  toJSON(inArray = false): File | File[] {
    const data = this.data as File;

    return inArray ? [data] : data;
  }
}
