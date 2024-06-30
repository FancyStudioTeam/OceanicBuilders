import { ButtonStyles, type NullablePartialEmoji } from "oceanic.js";
import { z } from "zod";

export const buttonLabelVerifier = z.string().max(80);
export const buttonSkuIDVerifier = z.string();
export const buttonStyleVerifier = z.nativeEnum(ButtonStyles);

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
  if (!style) {
    throw new Error("Buttons must have the 'style' property");
  }

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
