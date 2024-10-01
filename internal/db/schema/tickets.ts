import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

export const tickets = createTable(
  "tickets",
  {
    ticketId: varchar("id", { length: 256 }).primaryKey(),
    userId: varchar("user_id", { length: 256 }),
    name: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }),
    subject: varchar("subject", { length: 256 }),
    description: varchar("description", { length: 1024 }),
    priority: varchar("priority", { length: 10 }),
    custom: varchar("custom", { length: 1024 }),
    fileLink: varchar("file_link", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    tenantId: varchar("tenant_id", { length: 256 }).notNull(),
  }
);
