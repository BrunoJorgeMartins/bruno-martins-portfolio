import { describe, expect, it } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";

function createNonAdminContext(): TrpcContext {
  return {
    user: {
      id: 99,
      openId: "non-admin-user",
      email: "user@example.com",
      name: "Standard user",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as TrpcContext["res"],
  };
}

describe("file library permissions", () => {
  it("blocks a non-admin account from every file-management operation", async () => {
    const caller = appRouter.createCaller(createNonAdminContext());

    await expect(caller.fileLibrary.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
    await expect(caller.fileLibrary.upload({
      fileName: "cv.pdf",
      mimeType: "application/pdf",
      contentBase64: "YWJj",
      category: "curriculo",
    })).rejects.toMatchObject({ code: "FORBIDDEN" });
    await expect(caller.fileLibrary.remove({ id: 1 })).rejects.toMatchObject({ code: "FORBIDDEN" });
  });
});
