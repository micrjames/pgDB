import { Request, Response } from "express"; 
import { pool } from "../services/database.js"; 

export const userController = { 
   getUsers: (_: Request, res: Response) => {                        
	  pool.query('SELECT * FROM users').then(result => {
		 return res.status(200).json(result);
	  }).catch(err => {
		 return res.status(500).json({ error: err.message });
	  });
   }
};
