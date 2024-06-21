import { ButtonStyles } from "oceanic.js";
import { z } from "zod";

export const buttonLabelValidator = z.string().min(1).max(80);

export const buttonSkuIDValidator = z.string();

export const buttonStyleValidator = z.nativeEnum(ButtonStyles);
