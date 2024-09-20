import pg from 'pg';
const { Pool } = pg;

import { db_config } from "../.db_config.js";

export interface User {
   first_name: string;
   last_name: string;
   username: string;
   password: string;
   confirm_password: string;
   email: string; 
}

export const db = {
   pool: new Pool({
	   host: db_config.host,
	   user: db_config.user,
	   port: db_config.port,
	   database: db_config.database
   }),
   queryIt: async (query: string): Promise<pg.QueryResult | null> => {
	  let queryResult: (pg.QueryResult | null) = null;
	  queryResult = await db.pool.query(query)
	  return queryResult;
   }, 
   queryAll: async (table: string): Promise<pg.QueryResult | null> => {
	  return await db.queryIt(`SELECT * FROM ${table}`);
   }
};
