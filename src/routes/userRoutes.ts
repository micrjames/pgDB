import express from "express";
import { userController } from "../controllers/userController.js";

export const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers);
userRoutes.get('/:id', userController.getUser);
userRoutes.post('/', userController.postUser);
userRoutes.put('/:id', userController.putUser);
userRoutes.delete('/:id', userController.deleteUser);
