import { ButtonStyles, type NullablePartialEmoji } from "oceanic.js";
import { z } from "zod";

export const buttonLabelValidator = z.string().min(1).max(80);

export const buttonSkuIDValidator = z.string();

export const buttonStyleValidator = z.nativeEnum(ButtonStyles);

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity:
export function validateButton({
  customID,
  label,
  emoji,
  style,
  url,
  skuID,
}: {
  customID?: string;
  label?: string;
  emoji?: NullablePartialEmoji;
  style?: ButtonStyles;
  url?: string;
  skuID?: string;
}): void {
  if (skuID && (url || customID || label || emoji)) {
    throw new Error(
      'The properties "skuID" and "url" / "customID" / "label" | "emoji" are incompatible in the same object',
    );
  }

  if (url && customID) {
    throw new Error('The properties "url" and "customID" are incompatible in the same object');
  }

  if (style !== ButtonStyles.PREMIUM && !(label || emoji)) {
    throw new Error('One of the "label" or "emoji" properties is required on the object');
  }

  if (style === ButtonStyles.LINK && !url) {
    throw new Error('The "url" property is required when the "style" property is "ButtonStyles.LINK"');
  }

  if (style !== ButtonStyles.LINK && url) {
    throw new Error('The "url" property is not allowed when the "style" property is not "ButtonStyles.LINK"');
  }

  if (style === ButtonStyles.PREMIUM && !skuID) {
    throw new Error('The "skuID" property is required when the "style" property is "ButtonStyles.PREMIUM"');
  }

  if (style !== ButtonStyles.PREMIUM && skuID) {
    throw new Error('The "skuID" property is not allowed when the "style" property is "ButtonStyles.PREMIUM"');
  }
}
