import {
  type ButtonComponent,
  ButtonStyles,
  type NullablePartialEmoji,
  type PremiumButton,
  type TextButton,
  type URLButton,
} from "oceanic.js";
import { z } from "zod";
import { customIDVerifier, disabledVerifier, partialEmojiVerifier, urlVerifier, validate } from "..";

export const buttonLabelVerifier = z.string().min(1).max(80);
export const buttonSkuIDVerifier = z.string().min(1);
export const buttonStyleVerifier = z.nativeEnum(ButtonStyles);

export function verifyExternalButtonJSON(data: Partial<ButtonComponent>): Partial<ButtonComponent> {
  const json: Partial<ButtonComponent> = {};

  if ("customID" in data) {
    (json as TextButton).customID = validate(customIDVerifier, data.customID);
  }

  if ("disabled" in data) {
    json.disabled = validate(disabledVerifier, data.disabled);
  }

  if ("emoji" in data) {
    (json as TextButton).emoji = validate(partialEmojiVerifier, data.emoji);
  }

  if ("label" in data) {
    (json as TextButton).label = validate(buttonLabelVerifier, data.label);
  }

  if ("skuID" in data) {
    (json as PremiumButton).skuID = validate(buttonSkuIDVerifier, data.skuID);
  }

  if ("style" in data) {
    json.style = validate(buttonStyleVerifier, data.style);
  }

  if ("url" in data) {
    (json as URLButton).url = validate(urlVerifier, data.url);
  }

  return json;
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity:
export function verifyButtonJSON({
  style,
  label,
  emoji,
  customID,
  skuID,
  url,
}: {
  style?: ButtonStyles;
  label?: string;
  emoji?: NullablePartialEmoji;
  customID?: string;
  skuID?: string;
  url?: string;
}): void {
  if (style === ButtonStyles.PREMIUM) {
    if (!skuID) {
      throw new Error("Premium buttons must have the 'skuID' property");
    }

    if (customID || label || emoji || url) {
      throw new Error("Premium buttons must not have the 'customID' / 'label' / 'emoji' / 'url' properties");
    }
  } else if (style === ButtonStyles.LINK) {
    if (!url) {
      throw new Error("Link buttons must have the 'url' property");
    }

    if (!(label || emoji)) {
      throw new Error("Link buttons must have the 'label' or 'emoji' properties");
    }

    if (customID || skuID) {
      throw new Error("Link buttons must not have the 'customID' / 'skuID' properties");
    }
  } else {
    if (!customID) {
      throw new Error("Text buttons must have the 'customID' property");
    }

    if (!(label || emoji)) {
      throw new Error("Text buttons must have the 'label' or 'emoji' properties");
    }

    if (url || skuID) {
      throw new Error("Text buttons must not have the 'url' / 'skuID' properties");
    }
  }
}
