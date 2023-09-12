import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file

const { PG_CONNECTION_STRING } = process.env;

const pool = new Pool({
  connectionString: PG_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
