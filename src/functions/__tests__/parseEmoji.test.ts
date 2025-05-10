import { describe, expect, it } from "vitest";
import { parseEmoji } from "../parseEmoji.js";

describe("Function: parseEmoji", () => {
  it("Should return a nullable emoji object with 'name' field when passing an unicode emoji.", () =>
    expect(parseEmoji("⚠️")).toStrictEqual({
      name: "⚠️",
    }));

  it("Should return a nullable emoji object with 'name' and 'id' fields when passing a custom emoji.", () =>
    expect(parseEmoji("<:shield_quartered:1362950749381726238>")).toStrictEqual({
      id: "1362950749381726238",
      name: "shield_quartered",
    }));

  it("Should return a nullable emoji object with 'name' and 'id' fields when passing a custom emoji without '<>'.", () =>
    expect(parseEmoji(":shield_quartered:1362950749381726238")).toStrictEqual({
      id: "1362950749381726238",
      name: "shield_quartered",
    }));

  it("Should throw an error if the first argument is not a string.", () =>
    // @ts-expect-error
    expect(() => parseEmoji(123)).toThrow());

  it("Should throw an error if the second argument is not a string.", () =>
    // @ts-expect-error
    expect(() => parseEmoji("⚠️", 123)).toThrow());

  it("Should throw an error if the second argument is not a valid value.", () =>
    // @ts-expect-error
    expect(() => parseEmoji("⚠️", "unknown")).toThrow());
});
