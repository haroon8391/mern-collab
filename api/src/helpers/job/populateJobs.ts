import mongoose from "mongoose";
import Job from "../../models/Job.model";
import User from "../../models/User.model";

const userId = "66ceff85c6ec53e76363ea01";

const jobsData = [
	{
		title: "Analyst Programmer",
		description: "HR Coordinator",
		salary: 490644,
		company: "Reichert-Cruickshank",
		location: "Iturama",
		job_category: "Marketing",
		job_experience: "4",
		job_type: "full-time",
		job_vacancy: 5,
		job_deadline: new Date("2024-09-21T03:27:21.000Z"),
		createdBy: new mongoose.Types.ObjectId(userId),
		applicants: [],
	},
	{
		title: "Software Engineer",
		description: "Develop and maintain web applications",
		salary: 700000,
		company: "TechCorp",
		location: "Islamabad",
		job_category: "Software Development",
		job_experience: "2",
		job_type: "full-time",
		job_vacancy: 3,
		job_deadline: new Date("2024-10-15T12:00:00.000Z"),
		createdBy: new mongoose.Types.ObjectId(userId),
		applicants: [],
	},
	{
		title: "Database Administrator",
		description: "Manage and secure database systems",
		salary: 600000,
		company: "Data Solutions",
		location: "Lahore",
		job_category: "Database Administration",
		job_experience: "3",
		job_type: "full-time",
		job_vacancy: 2,
		job_deadline: new Date("2024-09-30T17:00:00.000Z"),
		createdBy: new mongoose.Types.ObjectId(userId),
		applicants: [],
	},
	{
		title: "Project Manager",
		description: "Lead and manage software development projects",
		salary: 800000,
		company: "Innovatech",
		location: "Karachi",
		job_category: "Project Management",
		job_experience: "5",
		job_type: "contract",
		job_vacancy: 1,
		job_deadline: new Date("2024-11-01T18:00:00.000Z"),
		createdBy: new mongoose.Types.ObjectId(userId),
		applicants: [],
	},
	{
		title: "Quality Assurance Engineer",
		description: "Ensure the quality of software products",
		salary: 550000,
		company: "QualityTech",
		location: "Faisalabad",
		job_category: "Quality Assurance",
		job_experience: "2",
		job_type: "full-time",
		job_vacancy: 4,
		job_deadline: new Date("2024-10-10T16:00:00.000Z"),
		createdBy: new mongoose.Types.ObjectId(userId),
		applicants: [],
	},
	{
		title: "UI/UX Designer",
		description: "Design user interfaces and user experiences",
		salary: 650000,
		company: "DesignPro",
		location: "Peshawar",
		job_category: "Design",
		job_experience: "3",
		job_type: "full-time",
		job_vacancy: 2,
		job_deadline: new Date("2024-11-15T14:00:00.000Z"),
		createdBy: new mongoose.Types.ObjectId(userId),
		applicants: [],
	},
];

const populateJobs = async () => {
	try {
		const userExists = await User.findById(userId);
		if (!userExists) {
			throw new Error("User not found.");
		}

		await Job.insertMany(jobsData);
		console.log("Job data populated successfully.");
	} catch (error) {
		console.error("Error populating jobs:", error);
	} finally {
		mongoose.connection.close();
	}
};

export default populateJobs;
