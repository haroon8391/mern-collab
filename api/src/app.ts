import express, { Request, Response } from "express";
import jobsRouter from "./routes/jobs.route";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/jobs", jobsRouter);

export default app;
