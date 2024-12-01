import type { File as OceanicFile } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { FileBuilder } from "../FileBuilder.js";

const File = (data?: Partial<OceanicFile>) => new FileBuilder(data);

describe("AttachmentBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON", () => expect(File().toJSON()).toStrictEqual({}));

    it("Should return JSON base with custom name", () =>
      expect(File().setName("test.png").toJSON()).toStrictEqual({
        name: "test.png",
      }));

    it("Should return JSON base with custom content", () =>
      expect(File().setContents(Buffer.from("test")).toJSON()).toStrictEqual({
        contents: Buffer.from("test"),
      }));

    it("Should return JSON base with custom index", () =>
      expect(File().setIndex(1).toJSON()).toStrictEqual({
        index: 1,
      }));
  });
});
