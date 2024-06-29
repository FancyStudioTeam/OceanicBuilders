import { z } from "zod";

export const embedAuthorVerifier = z.object({
  name: z.string().min(1).max(256),
  url: z.string().optional(),
  iconURL: z.string().optional(),
});
export const embedColorVerifier = z.number();
export const embedDescriptionVerifier = z.string().min(1).max(4096);
export const embedFieldVerifier = z.object({
  name: z.string().min(1).max(256),
  value: z.string().min(1).max(1024),
  inline: z.boolean().optional(),
});
export const embedFooterVerifier = z.object({
  text: z.string().min(1).max(2048),
  iconURL: z.string().optional(),
});
export const embedImageVerifier = z.string().url();
export const embedThumbnailVerifier = z.string().url();
export const embedTimestampVerifier = z.date();
export const embedTitleVerifier = z.string().min(1).max(256);
export const embedURLVerifier = z.string().url();
