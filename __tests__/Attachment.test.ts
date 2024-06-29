import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { Attachment as AttachmentBuilder } from "../src";
import { attachmentContentVerifier, attachmentIndexVerifier, attachmentNameVerifier, validate } from "../src/schemas";

const Attachment = () => new AttachmentBuilder();

describe("Verifier", () => {
  test("Verify arguments of the 'contents' verifier", () => {
    // Valid
    expect(() => validate(attachmentContentVerifier, Buffer.from(""))).not.toThrowError();

    // Invalid
    expect(() => validate(attachmentContentVerifier, "")).toThrowError();
  });

  test("Verify arguments of the 'index' verifier", () => {
    // Valid
    expect(() => validate(attachmentIndexVerifier, 0)).not.toThrowError();

    // Invalid
    expect(() => validate(attachmentIndexVerifier, "0")).toThrowError();
    expect(() => validate(attachmentIndexVerifier, -1)).toThrowError();
  });

  test("Verify arguments of the 'name' verifier", () => {
    // Valid
    expect(() => validate(attachmentNameVerifier, "Attachment.png")).not.toThrowError();

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
        .toJSONArray(),
    ).not.toThrowError();

    // Invalid
    expect(() => Attachment().toJSON()).toThrowError();
    expect(() => Attachment().toJSONArray()).toThrowError();
  });
});
