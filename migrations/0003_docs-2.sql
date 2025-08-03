ALTER TABLE "docs" ALTER COLUMN "content" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "docs" ALTER COLUMN "content" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "docs" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "docs" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "docs" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "docs" ALTER COLUMN "updated_at" SET DEFAULT now();