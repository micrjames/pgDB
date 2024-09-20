import express, { Express } from "express";
import { userRoutes } from "./routes/userRoutes.js";

const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use('/users', userRoutes);
app.listen(PORT, () => {
   console.log(`[server]: Server is running at port: ${PORT}`);
});
