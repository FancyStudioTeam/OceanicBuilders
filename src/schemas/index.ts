import { z } from "zod";

export * from "./interactions/Button";

export * from "./messages/Attachment";

export const customIDValidator = z.string().min(1).max(100);

export const disabledValidator = z.boolean();

export const urlValidator = z.string().url();

export const partialEmojiValidator = z.object({
  name: z.string().nullish(),
  id: z.string().nullish(),
});

export function validate<T>(schema: z.ZodType<T>, value: unknown): T {
  const parsedValue = schema.safeParse(value);

  if (!parsedValue.success) {
    throw new Error(parsedValue.error.issues[0].message);
  }

  return parsedValue.data;
}
