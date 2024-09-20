import pg from "pg";
import { User } from "./services/database.js";

declare global {
   namespace Express {
	  interface Request {
		 authed: boolean;
         users: pg.QueryResult<User> | null
      }
   }
}
export {};
