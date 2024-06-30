import { ButtonStyles } from "oceanic.js";
import { describe, expect, test } from "vitest";
import { Button as ButtonBuilder } from "../src";
import {
  buttonLabelVerifier,
  buttonSkuIDVerifier,
  buttonStyleVerifier,
  customIDVerifier,
  disabledVerifier,
  partialEmojiVerifier,
  urlVerifier,
  validate,
} from "../src/schemas";

const Button = () => new ButtonBuilder();

describe("Verifier", () => {
  test("Verify arguments of the 'customID' verifier", () => {
    // Valid
    expect(() => validate(customIDVerifier, "button")).not.toThrowError();
    expect(() => validate(customIDVerifier, "_".repeat(100))).not.toThrowError();

    // Invalid
    expect(() => validate(customIDVerifier, "_".repeat(101))).toThrowError();
    expect(() => validate(customIDVerifier, 1)).toThrowError();
  });

  test("Verify arguments of the 'disabled' verifier", () => {
    // Valid
    expect(() => validate(disabledVerifier, true)).not.toThrowError();

    // Invalid
    expect(() => validate(disabledVerifier, "true")).toThrowError();
  });

  test("Verify arguments of the 'emoji' verifier", () => {
    // Valid
    expect(() => validate(partialEmojiVerifier, { name: "🤖" })).not.toThrowError();
    expect(() => validate(partialEmojiVerifier, { name: "_", id: "1253332340344750121" })).not.toThrowError();

    // Invalid
    expect(() => validate(partialEmojiVerifier, "")).toThrowError();
    expect(() => validate(partialEmojiVerifier, "🤖")).toThrowError();
  });

  test("Verify arguments of the 'label' verifier", () => {
    // Valid
    expect(() => validate(buttonLabelVerifier, "Button")).not.toThrowError();
    expect(() => validate(buttonLabelVerifier, "_".repeat(80))).not.toThrowError();

    // Invalid
    expect(() => validate(buttonLabelVerifier, "_".repeat(81))).toThrowError();
    expect(() => validate(buttonLabelVerifier, 1)).toThrowError();
  });

  test("Verify arguments of the 'skuID' verifier", () => {
    // Valid
    expect(() => validate(buttonSkuIDVerifier, "1088510058284990888")).not.toThrowError();

    // Invalid
    expect(() => validate(buttonSkuIDVerifier, 1)).toThrowError();
  });

  test("Verify arguments of the 'style' verifier", () => {
    // Valid
    expect(() => validate(buttonStyleVerifier, ButtonStyles.PREMIUM)).not.toThrowError();
    expect(() => validate(buttonStyleVerifier, 2)).not.toThrowError();

    // Invalid
    expect(() => validate(buttonStyleVerifier, 7)).toThrowError();
    expect(() => validate(buttonStyleVerifier, 0)).toThrowError();
    expect(() => validate(buttonStyleVerifier, 5.5)).toThrowError();
    expect(() => validate(buttonStyleVerifier, -5)).toThrowError();
    expect(() => validate(buttonStyleVerifier, "PREMIUM")).toThrowError();
    expect(() => validate(buttonStyleVerifier, Number.NaN)).toThrowError();
    expect(() => validate(buttonStyleVerifier, Number.POSITIVE_INFINITY)).toThrowError();
  });

  test("Verify arguments of the 'url' verifier", () => {
    // Valid
    expect(() => validate(urlVerifier, "https://discord.com")).not.toThrowError();
    expect(() =>
      validate(urlVerifier, "https://en.wikipedia.org/wiki/Discord#/media/File:Discord_logo.svg"),
    ).not.toThrowError();

    // Invalid
    expect(() => validate(urlVerifier, "")).toThrowError();
    expect(() => validate(urlVerifier, "hello")).toThrowError();
    expect(() => validate(urlVerifier, 1)).toThrowError();
  });
});

describe("JSON Export", () => {
  test("Verify text button", () => {
    // Valid
    expect(() =>
      Button().setStyle(ButtonStyles.PRIMARY).setCustomID("button").setLabel("Button").toJSON(),
    ).not.toThrowError();
    expect(() =>
      Button().setStyle(ButtonStyles.PRIMARY).setCustomID("button").setEmoji({ name: "🤖" }).toJSON(),
    ).not.toThrowError();

    // Invalid
    expect(() => Button().toJSON()).toThrowError();
    expect(() => Button().setStyle(ButtonStyles.PRIMARY).toJSON()).toThrowError();
    expect(() => Button().setStyle(ButtonStyles.PRIMARY).setCustomID("button").toJSON()).toThrowError();
    expect(() =>
      Button()
        .setStyle(ButtonStyles.PRIMARY)
        .setCustomID("button")
        .setLabel("Button")
        .setURL("https://discord.com")
        .toJSON(),
    ).toThrowError();
    expect(() =>
      Button()
        .setStyle(ButtonStyles.PRIMARY)
        .setCustomID("button")
        .setLabel("Button")
        .setSkuID("1088510058284990888")
        .toJSON(),
    ).toThrowError();
  });

  test("Verify link button", () => {
    // Valid
    expect(() =>
      Button().setStyle(ButtonStyles.LINK).setURL("https://discord.com").setLabel("Button").toJSON(),
    ).not.toThrowError();

    // Invalid
    expect(() => Button().toJSON()).toThrowError();
    expect(() => Button().setStyle(ButtonStyles.LINK).toJSON()).toThrowError();
    expect(() =>
      Button()
        .setStyle(ButtonStyles.LINK)
        .setURL("https://discord.com")
        .setLabel("Button")
        .setCustomID("button")
        .toJSON(),
    ).toThrowError();
    expect(() =>
      Button()
        .setStyle(ButtonStyles.LINK)
        .setURL("https://discord.com")
        .setLabel("Button")
        .setSkuID("1088510058284990888")
        .toJSON(),
    ).toThrowError();
  });

  test("Verify premium button", () => {
    // Valid
    expect(() => Button().setStyle(ButtonStyles.PREMIUM).setSkuID("1088510058284990888").toJSON()).not.toThrowError();

    // Invalid
    expect(() => Button().toJSON()).toThrowError();
    expect(() => Button().setStyle(ButtonStyles.PREMIUM).toJSON()).toThrowError();
    expect(() =>
      Button().setStyle(ButtonStyles.PREMIUM).setSkuID("1088510058284990888").setCustomID("button").toJSON(),
    ).toThrowError();
    expect(() =>
      Button().setStyle(ButtonStyles.PREMIUM).setSkuID("1088510058284990888").setLabel("Button").toJSON(),
    ).toThrowError();
    expect(() =>
      Button().setStyle(ButtonStyles.PREMIUM).setSkuID("1088510058284990888").setEmoji({ name: "🤖" }).toJSON(),
    ).toThrowError();
    expect(() =>
      Button().setStyle(ButtonStyles.PREMIUM).setSkuID("1088510058284990888").setURL("https://discord.com").toJSON(),
    ).toThrowError();
  });
});
