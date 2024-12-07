import type { File as OceanicFile } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { FileBuilder } from "../FileBuilder.js";

const File = (data?: Partial<OceanicFile>) => new FileBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON", () => expect(File().toJSON()).toStrictEqual({}));

  it("Should return JSON base with custom name", () =>
    expect(File().setName("File.png").toJSON()).toStrictEqual({
      name: "File.png",
    }));

  it("Should return JSON base with custom content", () =>
    expect(File().setContents(Buffer.from("File Content")).toJSON()).toStrictEqual({
      contents: Buffer.from("File Content"),
    }));

  it("Should return JSON base with custom index", () =>
    expect(File().setIndex(1).toJSON()).toStrictEqual({
      index: 1,
    }));
});
