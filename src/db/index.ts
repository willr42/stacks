import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import { getDbConnectionString } from "@/lib/utils"

let connectionString = getDbConnectionString()

const pool = new Pool({
  connectionString,
})

export const db = drizzle(pool)
