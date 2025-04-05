import {
  timestamp,
  pgTable,
  text,
  integer,
  serial,
  index,
  foreignKey,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const stories = pgTable(
  "story",
  {
    id: serial("id").primaryKey().unique().notNull(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    content: text("content").notNull(),
    coverImage: text("cover_image").notNull(),
    location: text("location").notNull(),
    authorId: text("author_id").references(() => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
    tags: text("tags").array().notNull(),
    likeCount: integer("like_count").default(0),
    commentCount: integer("comment_count").default(0),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (t) => [
    {
      slugIndex: index("story_slug_index").on(t.slug),
      userIndex: index("story_user_index").on(t.authorId),
    },
  ],
);

export const storyComments = pgTable(
  "story_comment",
  {
    id: serial("id").primaryKey().unique().notNull(),
    storyId: integer("story_id").references(() => stories.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
    authorId: text("author_id").references(() => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
    parentId: integer("parent_id"),
    replyCount: integer("reply_count").default(0),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (t) => [
    {
      storyIndex: index("story_comment_story_index").on(t.storyId),
      userIndex: index("story_comment_user_index").on(t.authorId),
      parentIdFk: foreignKey({
        columns: [t.parentId],
        foreignColumns: [t.id],
        name: "story_comment_parent_id_fkey",
      }),
      parentIdIndex: index("story_comment_parent_id_index").on(t.parentId),
    },
  ],
);

export const storyLikes = pgTable(
  "story_like",
  {
    id: serial("id").primaryKey().unique().notNull(),
    storyId: integer("story_id").references(() => stories.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
    userId: text("user_id").references(() => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (t) => [
    {
      storyIndex: index("story_like_story_index").on(t.storyId),
      userIndex: index("story_like_user_index").on(t.userId),
    },
  ],
);

// relations
export const storyCommentsRelations = relations(
  storyComments,
  ({ one, many }) => {
    return {
      author: one(users, {
        fields: [storyComments.authorId],
        references: [users.id],
      }),
      story: one(stories, {
        fields: [storyComments.storyId],
        references: [stories.id],
      }),
      replies: many(storyComments),
    };
  },
);

export const storyRelations = relations(stories, ({ one, many }) => {
  return {
    author: one(users, {
      fields: [stories.authorId],
      references: [users.id],
    }),
    comments: many(storyComments),
  };
});
