/**
 * Private portfolio file library: database stores only metadata, while file bytes live in S3.
 * Every procedure is admin-gated so that publicly visiting the portfolio cannot expose uploads.
 */

import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createPortfolioFile, listPortfolioFiles, removePortfolioFile } from "../db";
import { storagePut } from "../storage";
import { adminProcedure, router } from "../_core/trpc";

export const fileCategorySchema = z.enum(["curriculo", "screenshot", "projeto", "outro"]);

export const uploadInputSchema = z.object({
  fileName: z.string().trim().min(1).max(255),
  mimeType: z.string().trim().min(1).max(191),
  contentBase64: z.string().min(1).max(11_000_000),
  category: fileCategorySchema,
});

const MAX_FILE_BYTES = 7 * 1024 * 1024;
const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
]);

export function isAllowedMimeType(mimeType: string) {
  return mimeType.startsWith("image/") || allowedMimeTypes.has(mimeType);
}

export function sanitizeFileName(fileName: string) {
  const normalized = fileName.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  return normalized.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").replace(/^[.-]+/, "").slice(0, 180) || "ficheiro";
}

export const fileLibraryRouter = router({
  list: adminProcedure.query(({ ctx }) => listPortfolioFiles(ctx.user.id)),

  upload: adminProcedure.input(uploadInputSchema).mutation(async ({ ctx, input }) => {
    if (!isAllowedMimeType(input.mimeType)) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Formato não suportado. Envie imagens, PDF, Word ou TXT." });
    }

    const bytes = Buffer.from(input.contentBase64, "base64");
    if (!bytes.length || bytes.length > MAX_FILE_BYTES) {
      throw new TRPCError({ code: "PAYLOAD_TOO_LARGE", message: "O ficheiro deve ter até 7 MB." });
    }

    const fileName = sanitizeFileName(input.fileName);
    const relativeKey = `portfolio/${ctx.user.id}/${Date.now()}-${fileName}`;
    const stored = await storagePut(relativeKey, bytes, input.mimeType);

    const metadata = await createPortfolioFile({
      userId: ctx.user.id,
      fileName: input.fileName,
      fileKey: stored.key,
      url: stored.url,
      mimeType: input.mimeType,
      byteSize: bytes.length,
      category: input.category,
    });

    return metadata;
  }),

  remove: adminProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
    await removePortfolioFile(input.id, ctx.user.id);
    return { success: true } as const;
  }),
});
