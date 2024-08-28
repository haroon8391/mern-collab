import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		salary: {
			type: Number,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		job_category: {
			type: String,
			required: true,
		},
		job_experience: {
			type: String,
			required: true,
		},
		job_type: {
			type: String,
			required: true,
		},
		job_vacancy: {
			type: Number,
			required: true,
		},
		job_deadline: {
			type: Date,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		applicants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Application",
			},
		],
	},
	{ timestamps: true }
);

jobSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();

		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
