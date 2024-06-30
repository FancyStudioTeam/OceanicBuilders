import { z } from "zod";

export * from "./schemas/Attachment";
export * from "./schemas/Button";
export * from "./schemas/Embed";

export const customIDVerifier = z.string().max(100);
export const disabledVerifier = z.boolean();
export const imageURLVerifier = z
  .string()
  .url()
  .regex(/^(http:|https:|attachment:).*/);
export const urlVerifier = z
  .string()
  .url()
  .regex(/^(http:|https:).*/);
export const partialEmojiVerifier = z.object({
  name: z.string(),
  id: z.string().nullish(),
});

export function validate<T>(schema: z.ZodType<T>, value: unknown): T {
  const parsedValue = schema.safeParse(value);

  if (!parsedValue.success) {
    throw new Error(parsedValue.error.issues[0].message);
  }

  return parsedValue.data;
}
