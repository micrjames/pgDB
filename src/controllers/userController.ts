import { Request, Response } from "express";
import { db } from "../services/database.js";

export const userController = { 
   getUsers: (req: Request, res: Response) => {
	  db.queryAll("users").then(result => {
		 req.users = result;
		 return res.status(200).json(req.users);
	  }).catch(err => {
		 return res.status(500).json({ message: err });
	  });
   },
   postUser: (_: Request, res: Response) => {
      return res.status(200).json({ message: 'user posted' });
   },
   getUser: (req: Request, res: Response) => {
	  const { id } = req.params;
	  db.queryIt(`SELECT * FROM users WHERE id=${id}`).then(result => {
		 req.users = result;
		 return res.status(200).json(req.users);
	  }).catch(err => {
		 return res.status(500).json({ message: err });
	  });
   },
   putUser: (_: Request, res: Response) => {
      return res.status(200).json({ message: 'user putted' });
   },
   deleteUser: (_: Request, res: Response) => {
      return res.status(200).json({ message: 'user deleted' });
   },
};
