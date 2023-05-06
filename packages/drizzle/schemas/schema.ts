import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core"
import { text } from "drizzle-orm/mysql-core"
import { int } from "drizzle-orm/mysql-core"

export const example = mysqlTable("example", {
  id: varchar("id", { length: 191 }).primaryKey().notNull(),
  created_at: timestamp("created_at").notNull().defaultNow().onUpdateNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
})

export const usersExample = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name").notNull(),
  age: int("age"),
  occupation: text("occupation"),
})
