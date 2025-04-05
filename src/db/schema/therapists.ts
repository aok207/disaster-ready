import {
  integer,
  pgTable,
  serial,
  real,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const therapists = pgTable("therapist", {
  id: serial("id").primaryKey().notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  image: text("image"),
  specialities: text("specialities").array().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const therapistReviews = pgTable("therapist_review", {
  id: serial("id").primaryKey().notNull().unique(),
  therapistId: integer("therapist_id").references(() => therapists.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  authorId: text("author_id").references(() => users.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  rating: real("rating").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const consultationPreferredTimeEnum = pgEnum("preferred_time", [
  "Morning (9AM - 12PM)",
  "Afternoon (12PM - 5PM)",
  "Evening (5PM - 8PM)",
]);

export const consultations = pgTable("consultation", {
  id: serial("id").primaryKey().notNull().unique(),
  therapistId: integer("therapist_id").references(() => therapists.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  userId: text("user_id").references(() => users.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  preferredDate: timestamp("preferred_date", { mode: "date" }).notNull(),
  preferredTime: consultationPreferredTimeEnum().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Therapist relations
export const therapistRelations = relations(therapists, ({ many }) => ({
  reviews: many(therapistReviews),
  consultations: many(consultations),
}));

// Therapist Review relations
export const therapistReviewRelations = relations(
  therapistReviews,
  ({ one }) => ({
    therapist: one(therapists, {
      fields: [therapistReviews.therapistId],
      references: [therapists.id],
    }),
    author: one(users, {
      fields: [therapistReviews.authorId],
      references: [users.id],
    }),
  }),
);

// Consultation relations
export const consultationRelations = relations(consultations, ({ one }) => ({
  therapist: one(therapists, {
    fields: [consultations.therapistId],
    references: [therapists.id],
  }),
  user: one(users, {
    fields: [consultations.userId],
    references: [users.id],
  }),
}));
