import express, { Request, Response } from "express";
import jobsRouter from "./routes/jobs.route";
import cors from "cors";
import dbConn from "./config/dbConn";
dbConn();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/jobs", jobsRouter);

export default app;
