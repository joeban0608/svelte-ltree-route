import { sql } from 'drizzle-orm';
import {
	pgTable,
	integer,
	text,
	timestamp,
	varchar,
	customType,
	uniqueIndex,
	uuid,
	boolean
} from 'drizzle-orm/pg-core';

const ltree = customType<{ data: string }>({
	dataType() {
		return 'ltree';
	}
});
export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const docs = pgTable(
	'docs',
	{
		id: uuid('id')
			.primaryKey()
			.default(sql`gen_random_uuid()`),
		label: varchar('label', { length: 255 }).notNull(),
		content: text('content').default(''),
		createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
		updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
		category: text('category', { enum: ['docs'] }).notNull(),
		slug: varchar('slug', { length: 255 }).notNull().unique(),
		deprecated: boolean('deprecated').notNull().default(false),
		deprecatedRedirectUrl: varchar('deprecated_redirect_url', { length: 2048 }),
		enable: boolean('enable').notNull().default(false),
		order: ltree('order', { mode: 'text' }).notNull().unique()
	},
	(t) => [uniqueIndex('idx_docs_category_slug').on(t.category, t.slug)]
);

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
