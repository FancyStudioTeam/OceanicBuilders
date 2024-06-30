import { z } from "zod";

export const attachmentContentVerifier = z.instanceof(Buffer).refine((value) => value.length > 0);
export const attachmentIndexVerifier = z.number().min(1).int();
export const attachmentNameVerifier = z.string().min(1);

export function verifyAttachmentJSON({ contents, name }: { contents?: Buffer; name?: string }): void {
  if (!(contents && name)) {
    throw new Error("Attachments must have the 'contents' / 'name' properties");
  }
}
