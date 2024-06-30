import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { Attachment as AttachmentBuilder } from "../src";
import { attachmentContentVerifier, attachmentIndexVerifier, attachmentNameVerifier, validate } from "../src/schemas";

const Attachment = () => new AttachmentBuilder();

describe("Verifier", () => {
  test("Verify arguments of the 'contents' verifier", () => {
    // Valid
    expect(() =>
      validate(attachmentContentVerifier, readFileSync(join(__dirname, "..", "assets/Oceanic.png"))),
    ).not.toThrowError();

    // Invalid
    expect(() => validate(attachmentContentVerifier, Buffer.alloc(0))).toThrowError();
    expect(() => validate(attachmentContentVerifier, Buffer.from(""))).toThrowError();
    expect(() => validate(attachmentContentVerifier, "")).toThrowError();
  });

  test("Verify arguments of the 'index' verifier", () => {
    // Valid
    expect(() => validate(attachmentIndexVerifier, 1)).not.toThrowError();
    expect(() => validate(attachmentIndexVerifier, 15)).not.toThrowError();

    // Invalid
    expect(() => validate(attachmentIndexVerifier, "1")).toThrowError();
    expect(() => validate(attachmentIndexVerifier, 1.5)).toThrowError();
    expect(() => validate(attachmentIndexVerifier, 0)).toThrowError();
    expect(() => validate(attachmentIndexVerifier, -0)).toThrowError();
    expect(() => validate(attachmentIndexVerifier, -1)).toThrowError();
    expect(() => validate(attachmentIndexVerifier, Number.NaN)).toThrowError();
    expect(() => validate(attachmentIndexVerifier, Number.POSITIVE_INFINITY)).toThrowError();
  });

  test("Verify arguments of the 'name' verifier", () => {
    // Valid
    expect(() => validate(attachmentNameVerifier, "Image")).not.toThrowError();

    // Invalid
    expect(() => validate(attachmentNameVerifier, "")).toThrowError();
    expect(() => validate(attachmentNameVerifier, 1)).toThrowError();
  });
});

describe("JSON Export", () => {
  test("Verify attachment", () => {
    // Valid
    expect(() =>
      Attachment()
        .setContent(readFileSync(join(__dirname, "..", "assets/Oceanic.png")))
        .setName("Image")
        .toJSON(),
    ).not.toThrowError();
    expect(() =>
      Attachment()
        .setContent(readFileSync(join(__dirname, "..", "assets/Oceanic.png")))
        .setName("Image")
        .toJSON(),
    ).not.toThrowError();

    // Invalid
    expect(() => Attachment().toJSON()).toThrowError();
    expect(() =>
      Attachment()
        .setContent(readFileSync(join(__dirname, "..", "assets/Oceanic.png")))
        .toJSON(),
    ).toThrowError();
    expect(() => Attachment().setName("Image").toJSON()).toThrowError();
  });
});
