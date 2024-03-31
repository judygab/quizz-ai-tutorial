CREATE TABLE IF NOT EXISTS "quizz_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"quizz_id" integer,
	"completed" boolean,
	"started" boolean,
	"score" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quizzes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"user_id" text,
	"published" boolean
);
--> statement-breakpoint
DROP TABLE "field_options";--> statement-breakpoint
DROP TABLE "form_submissions";--> statement-breakpoint
DROP TABLE "forms";--> statement-breakpoint
ALTER TABLE "answers" ADD COLUMN "answer_text" text;--> statement-breakpoint
ALTER TABLE "answers" ADD COLUMN "is_correct" boolean;--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "question_text" text;--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "quizz_id" integer;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "stripe_customer_id" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "subscribed" boolean;--> statement-breakpoint
ALTER TABLE "answers" DROP COLUMN IF EXISTS "value";--> statement-breakpoint
ALTER TABLE "answers" DROP COLUMN IF EXISTS "form_submission_id";--> statement-breakpoint
ALTER TABLE "answers" DROP COLUMN IF EXISTS "field_options_id";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "text";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "field_type";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "form_id";