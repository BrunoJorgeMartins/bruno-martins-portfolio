import { index, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/** Metadata for portfolio resources; raw file bytes remain exclusively in S3 storage. */
export const portfolioFiles = mysqlTable("portfolioFiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  fileName: varchar("fileName", { length: 255 }).notNull(),
  fileKey: varchar("fileKey", { length: 512 }).notNull().unique(),
  url: varchar("url", { length: 512 }).notNull(),
  mimeType: varchar("mimeType", { length: 191 }).notNull(),
  byteSize: int("byteSize").notNull(),
  category: mysqlEnum("category", ["curriculo", "screenshot", "projeto", "outro"]).default("outro").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => [index("portfolioFiles_userId_createdAt_idx").on(table.userId, table.createdAt)]);

export type PortfolioFile = typeof portfolioFiles.$inferSelect;
export type InsertPortfolioFile = typeof portfolioFiles.$inferInsert;
