import { z } from "zod";

export const embedAuthorVerifier = z.object({
  name: z.string().max(256),
  url: z.string().optional(),
  iconURL: z.string().optional(),
});
export const embedColorVerifier = z.number();
export const embedDescriptionVerifier = z.string().max(4096);
export const embedFieldVerifier = z.object({
  name: z.string().max(256),
  value: z.string().max(1024),
  inline: z.boolean().optional(),
});
export const embedFooterVerifier = z.object({
  text: z.string().max(2048),
  iconURL: z.string().optional(),
});
export const embedImageVerifier = z.string().url();
export const embedThumbnailVerifier = z.string().url();
export const embedTimestampVerifier = z.instanceof(Date);
export const embedTitleVerifier = z.string().max(256);
