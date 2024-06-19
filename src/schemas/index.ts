import { z } from "zod";

export * from "./components/Button";

export const customIDValidator = z.string().min(1).max(100);

export const disabledValidator = z.boolean();

export const urlValidator = z.string().url();

export const partialEmojiValidator = z.object({
  name: z.string().nullable(),
  id: z.string().nullable(),
});

export function validate<T>(schema: z.ZodType<T>, value: T): T {
  const parsedValue = schema.safeParse(value);

  if (!parsedValue.success) {
    throw new Error(parsedValue.error.issues[0].message);
  }

  return parsedValue.data;
}
