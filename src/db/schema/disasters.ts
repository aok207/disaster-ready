import { relations } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  integer,
  serial,
  index,
  real,
} from "drizzle-orm/pg-core";

export const disasters = pgTable("diaster", {
  id: serial("id").primaryKey().notNull().unique(),
  name: text("name").notNull().unique(),
  overview: text("overview").notNull(),
  image: text("image").notNull(),
  causes: text("causes").array().notNull(),
  effects: text("effects").array().notNull(),
  beforeTasks: text("before_tasks").array().notNull(),
  duringTasks: text("during_tasks").array().notNull(),
  afterTasks: text("after_tasks").array().notNull(),
  checklistFile: text("checklist_file"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const disasterHistories = pgTable("disaster_history", {
  id: serial("id").primaryKey().notNull().unique(),
  name: text("name").notNull(),
  disasterId: integer("disaster_id").references(() => disasters.id),
  date: timestamp("date", { mode: "date" }).notNull(),
  magnitude: real("magnitude").notNull(),
  description: text("description").notNull(),
});

export const disasterNews = pgTable(
  "disaster_news",
  {
    id: serial("id").primaryKey().unique().notNull(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    coverImage: text("cover_image").notNull(),
    location: text("location").notNull(),
    date: timestamp("date", { mode: "date" }).notNull(),
    disasterId: integer("disaster_id").references(() => disasters.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
    source: text("source").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (t) => [
    {
      slugIndex: index("news_slug_index").on(t.slug),
      disasterIndex: index("news_disaster_index").on(t.disasterId),
    },
  ],
);

// relations
//
export const disasterRelations = relations(disasters, ({ many }) => ({
  disasterHistories: many(disasterHistories),
  disasterNews: many(disasterNews),
}));

export const disasterHistoryRelations = relations(
  disasterHistories,
  ({ one }) => ({
    disaster: one(disasters, {
      fields: [disasterHistories.disasterId],
      references: [disasters.id],
    }),
  }),
);

export const disasterNewsRelations = relations(disasterNews, ({ one }) => ({
  disaster: one(disasters, {
    fields: [disasterNews.disasterId],
    references: [disasters.id],
  }),
}));
