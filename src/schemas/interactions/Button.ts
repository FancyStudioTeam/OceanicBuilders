import { type ButtonComponent, ButtonStyles, type PremiumButton, type TextButton, type URLButton } from "oceanic.js";
import { z } from "zod";
import { customIDValidator, disabledValidator, partialEmojiValidator, urlValidator, validate } from "..";

export const buttonLabelValidator = z.string().min(1).max(80);

export const buttonSkuIDValidator = z.string().min(1);

export const buttonStyleValidator = z.nativeEnum(ButtonStyles);

export function verifyExternalButtonJSON(data: Partial<ButtonComponent>): Partial<ButtonComponent> {
  const json: Partial<ButtonComponent> = {};

  if ("customID" in data) {
    (json as TextButton).customID = validate(customIDValidator, data.customID);
  }

  if ("disabled" in data) {
    json.disabled = validate(disabledValidator, data.disabled);
  }

  if ("emoji" in data) {
    (json as TextButton).emoji = validate(partialEmojiValidator, data.emoji);
  }

  if ("label" in data) {
    (json as TextButton).label = validate(buttonLabelValidator, data.label);
  }

  if ("skuID" in data) {
    (json as PremiumButton).skuID = validate(buttonSkuIDValidator, data.skuID);
  }

  if ("style" in data) {
    json.style = validate(buttonStyleValidator, data.style);
  }

  if ("url" in data) {
    (json as URLButton).url = validate(urlValidator, data.url);
  }

  return json;
}
