import { getDbConnectionString } from "@/lib/utils"
import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"
import "dotenv/config"

console.log(process.env)

const connectionString = getDbConnectionString()

const pool = new Pool({
  connectionString,
})

const db = drizzle(pool)

migrate(db, { migrationsFolder: "drizzle/migrations" })
