import { describe, expect, test } from "vitest";
import { Attachment } from "../src";

describe("Valid", () => {
  describe("Arguments", () => {
    test("Returns an object with predefined or empty properties", () => {
      expect(new Attachment().toJSON()).toStrictEqual({});
    });

    test("Returns an object with 'contents' property", () => {
      expect(new Attachment().setContent(Buffer.from("")).toJSON()).toStrictEqual({
        contents: Buffer.from(""),
      });
    });

    test("Returns an object with 'index' property", () => {
      expect(new Attachment().setIndex(0).toJSON()).toStrictEqual({
        index: 0,
      });
    });

    test("Returns an object with 'name' property", () => {
      expect(new Attachment().setName("Attachment.png").toJSON()).toStrictEqual({
        name: "Attachment.png",
      });
    });
  });
});

describe("Invalid", () => {
  describe("Arguments", () => {
    test("Checks for invalid arguments in 'contents' property", () => {
      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Attachment().setContent("attachment");
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'index' property", () => {
      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Attachment().setIndex("0");
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'name' property", () => {
      // Min length
      expect(() => {
        new Attachment().setName("");
      }).toThrowError();

      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Attachment().setName(1);
      }).toThrowError();
    });
  });
});
