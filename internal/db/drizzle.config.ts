import { type Config } from "drizzle-kit";
import  dotenv from "dotenv";
import { resolve } from "path";


dotenv.config({ path: resolve(__dirname, '../../.env') });

const DATABASE_URL = process.env.DATABASE_URL as string;

export default {
  schema: "./schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
  tablesFilter: ["hlink_*"],
} satisfies Config;
