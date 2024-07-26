import express from "express";
import cors from "cors";
import "express-async-errors";

import middleware from "./utils/middleware";
import jobsRouter from "./routes/jobs.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

// Routes
app.use("/api/v1/jobs", jobsRouter);

// Error handling middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
