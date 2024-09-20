import express from "express";
import { userController } from "../controllers/userController.js";

export const userRoutes = express.Router();

userRoutes.route('/').get(userController.getUsers).post(userController.postUser);
userRoutes.route('/:id').get(userController.getUser).put(userController.putUser).delete(userController.deleteUser);
