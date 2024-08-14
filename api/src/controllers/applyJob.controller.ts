import { Request, Response } from "express";
import Application from "../models/ApplyJob.model";
import Job from "../models/Job.model";
import User from "../models/User.model";

export const applyForJob = async (req: Request, res: Response) => {
  try {
    const { name, education, city, experience, qualities, jobId } = req.body;
    const userId = req.user?.userId;

    if (
      !name ||
      !education ||
      !city ||
      !experience ||
      !qualities ||
      !jobId ||
      !userId
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newApplication = new Application({
      name,
      education,
      city,
      experience,
      qualities,
      userId,
      jobId,
    });

    const savedApplication = await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application: savedApplication,
    });
  } catch (error) {
    console.error("Error in applyForJob: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
