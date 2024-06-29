import { z } from "zod";

export * from "./interactions/Button";
export * from "./messages/Attachment";
export * from "./messages/Embed";

export const customIDVerifier = z.string().min(1).max(100);
export const disabledVerifier = z.boolean();
export const urlVerifier = z.string().min(1).url();
export const partialEmojiVerifier = z.object({
  name: z.string().min(1),
  id: z.string().min(1).nullish(),
});

export function validate<T>(schema: z.ZodType<T>, value: unknown): T {
  const parsedValue = schema.safeParse(value);

  if (!parsedValue.success) {
    throw new Error(parsedValue.error.issues[0].message);
  }

  return parsedValue.data;
}
