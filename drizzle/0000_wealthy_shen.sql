CREATE TYPE "public"."preferred_time" AS ENUM('Morning (9AM - 12PM)', 'Afternoon (12PM - 5PM)', 'Evening (5PM - 8PM)');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TABLE "disaster_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"disaster_id" integer,
	"date" timestamp NOT NULL,
	"magnitude" real NOT NULL,
	"description" text NOT NULL,
	CONSTRAINT "disaster_history_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "disaster_news" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"cover_image" text NOT NULL,
	"location" text NOT NULL,
	"date" timestamp NOT NULL,
	"disaster_id" integer,
	"source" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "disaster_news_id_unique" UNIQUE("id"),
	CONSTRAINT "disaster_news_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "diaster" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"overview" text NOT NULL,
	"image" text NOT NULL,
	"causes" text[] NOT NULL,
	"effects" text[] NOT NULL,
	"before_tasks" text[] NOT NULL,
	"during_tasks" text[] NOT NULL,
	"after_tasks" text[] NOT NULL,
	"checklist_file" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "diaster_id_unique" UNIQUE("id"),
	CONSTRAINT "diaster_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "story" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"content" text NOT NULL,
	"cover_image" text NOT NULL,
	"location" text NOT NULL,
	"author_id" text,
	"tags" text[] NOT NULL,
	"like_count" integer DEFAULT 0,
	"comment_count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "story_id_unique" UNIQUE("id"),
	CONSTRAINT "story_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "story_comment" (
	"id" serial PRIMARY KEY NOT NULL,
	"story_id" integer,
	"author_id" text,
	"parent_id" integer,
	"reply_count" integer DEFAULT 0,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "story_comment_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "story_like" (
	"id" serial PRIMARY KEY NOT NULL,
	"story_id" integer,
	"user_id" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "story_like_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "consultation" (
	"id" serial PRIMARY KEY NOT NULL,
	"therapist_id" integer,
	"user_id" text,
	"preferred_date" timestamp NOT NULL,
	"preferredTime" "preferred_time" NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "consultation_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "therapist_review" (
	"id" serial PRIMARY KEY NOT NULL,
	"therapist_id" integer,
	"author_id" text,
	"rating" real NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "therapist_review_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "therapist" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"location" text NOT NULL,
	"image" text,
	"specialities" text[] NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "therapist_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text
);
--> statement-breakpoint
CREATE TABLE "authenticator" (
	"credentialID" text NOT NULL,
	"userId" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"credentialPublicKey" text NOT NULL,
	"counter" integer NOT NULL,
	"credentialDeviceType" text NOT NULL,
	"credentialBackedUp" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticator_credentialID_unique" UNIQUE("credentialID")
);
--> statement-breakpoint
CREATE TABLE "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"role" "role" DEFAULT 'user',
	"emailVerified" timestamp,
	"image" text,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "disaster_history" ADD CONSTRAINT "disaster_history_disaster_id_diaster_id_fk" FOREIGN KEY ("disaster_id") REFERENCES "public"."diaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "disaster_news" ADD CONSTRAINT "disaster_news_disaster_id_diaster_id_fk" FOREIGN KEY ("disaster_id") REFERENCES "public"."diaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "story" ADD CONSTRAINT "story_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "story_comment" ADD CONSTRAINT "story_comment_story_id_story_id_fk" FOREIGN KEY ("story_id") REFERENCES "public"."story"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "story_comment" ADD CONSTRAINT "story_comment_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "story_like" ADD CONSTRAINT "story_like_story_id_story_id_fk" FOREIGN KEY ("story_id") REFERENCES "public"."story"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "story_like" ADD CONSTRAINT "story_like_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_therapist_id_therapist_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."therapist"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "therapist_review" ADD CONSTRAINT "therapist_review_therapist_id_therapist_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."therapist"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "therapist_review" ADD CONSTRAINT "therapist_review_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;