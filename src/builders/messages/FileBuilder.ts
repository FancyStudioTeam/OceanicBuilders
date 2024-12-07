import type { File } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

export class FileBuilder extends BaseBuilder<File> {
  setContents(contents: Buffer) {
    this.data.contents = contents;

    return this;
  }

  setIndex(index: number) {
    this.data.index = index;

    return this;
  }

  setName(name: string) {
    this.data.name = name;

    return this;
  }
}
