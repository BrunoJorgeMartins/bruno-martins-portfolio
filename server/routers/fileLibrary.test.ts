import { describe, expect, it } from "vitest";
import { isAllowedMimeType, sanitizeFileName, uploadInputSchema } from "./fileLibrary";

describe("file library validation", () => {
  it("keeps storage keys predictable and safe", () => {
    expect(sanitizeFileName("CV Bruno Martins 2026.pdf")).toBe("CV-Bruno-Martins-2026.pdf");
    expect(sanitizeFileName("../../dados?.pdf")).toBe("dados-.pdf");
  });

  it("allows portfolio file formats and rejects unsupported MIME types", () => {
    expect(isAllowedMimeType("image/png")).toBe(true);
    expect(isAllowedMimeType("application/pdf")).toBe(true);
    expect(isAllowedMimeType("application/zip")).toBe(false);
  });

  it("enforces the structured upload contract", () => {
    expect(uploadInputSchema.safeParse({ fileName: "cv.pdf", mimeType: "application/pdf", contentBase64: "YWJj", category: "curriculo" }).success).toBe(true);
    expect(uploadInputSchema.safeParse({ fileName: "", mimeType: "application/pdf", contentBase64: "YWJj", category: "curriculo" }).success).toBe(false);
  });
});
