CREATE TABLE "docs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"label" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL,
	"category" text NOT NULL,
	"slug" varchar(255) NOT NULL,
	"deprecated" boolean DEFAULT false NOT NULL,
	"deprecated_redirect_url" varchar(2048),
	"enable" boolean DEFAULT false NOT NULL,
	"order" "ltree" NOT NULL,
	CONSTRAINT "docs_slug_unique" UNIQUE("slug"),
	CONSTRAINT "docs_order_unique" UNIQUE("order")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "idx_docs_category_slug" ON "docs" USING btree ("category","slug");