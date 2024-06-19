import { ButtonStyles, type NullablePartialEmoji } from "oceanic.js";
import { z } from "zod";

export const buttonLabelValidator = z.string().min(1).max(80);

export const buttonStyleValidator = z.nativeEnum(ButtonStyles);

export function validateButton({
  customID,
  label,
  emoji,
  style,
  url,
}: {
  customID?: string;
  label?: string;
  emoji?: NullablePartialEmoji;
  style?: ButtonStyles;
  url?: string;
}): void {
  if (url && customID) {
    throw new Error('The properties "customID" and "url" are incompatible in the same object');
  }

  if (!(label || emoji)) {
    throw new Error('One of the "label" or "emoji" properties is required on the object');
  }

  if (style === ButtonStyles.LINK && !url) {
    throw new Error('The "url" property is required when the "style" property is "ButtonStyles.LINK"');
  }

  if (style !== ButtonStyles.LINK && url) {
    throw new Error('The "url" property is not allowed when the "style" property is not "ButtonStyles.LINK"');
  }
}
