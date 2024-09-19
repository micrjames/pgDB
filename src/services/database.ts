import pg from 'pg';
const { Pool } = pg;

import { db_config } from "../.db_config.js";

export const pool = new Pool({
	host: db_config.host,
	user: db_config.user,
	port: db_config.port,
	database: db_config.database
});
