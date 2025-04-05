import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 255 }),
  imageUrl: text("image_url"),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
