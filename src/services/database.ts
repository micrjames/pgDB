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
   queryIt: async (table: string, clause: string = "", column: string = '*', cmd: string = "SELECT"): Promise<pg.QueryResult | null> => {
	  let queryResult: (pg.QueryResult | null) = null;
	  queryResult = await db.pool.query(`${cmd} ${column} FROM ${table} ${clause}`);
	  return queryResult;
   }, 
   queryAll: async (table: string): Promise<pg.QueryResult | null> => {
	  return await db.queryIt(table);
   },
   insertInto: async (table: string) => {
	  const client = await db.pool.connect();
	  const query = `
		 INSERT INTO ${table} VALUES ();			
	  `;
	  client.query(query, (err, _) => {
		 if(err) {
			console.error(err);
			return;
		 }
		 console.log('Data delete successful');
		 client.release();
	  });
   },
   deleteFrom: async (table: string, id: number) => {
	  const client = await db.pool.connect();
	  const query = `
		 DELETE FROM ${table}
			WHERE id = ${id}
	  `;
	  client.query(query, (err, _) => {
		 if(err) {
			console.error(err);
			return;
		 }
		 console.log('Data delete successful');
		 client.release();
	  });
   }
};
