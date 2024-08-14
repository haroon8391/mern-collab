import mongoose, { Document, Schema } from "mongoose";

interface IApplication extends Document {
  name: string;
  education: string;
  city: string;
  experience: string;
  qualities?: string;
  userId: mongoose.Schema.Types.ObjectId;
  jobId: mongoose.Schema.Types.ObjectId;
}

const applicationSchema: Schema = new Schema({
  name: { type: String, required: true },
  education: { type: String, required: true },
  city: { type: String, required: true },
  experience: { type: String, required: true },
  qualities: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
});

const Application = mongoose.model<IApplication>(
  "Application",
  applicationSchema
);

export default Application;
