import { z } from "zod";

export const attachmentContentValidator = z.instanceof(Buffer);

export const attachmentIndexValidator = z.number().min(0);

export const attachmentNameValidator = z.string().min(1);
