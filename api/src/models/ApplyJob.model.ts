import mongoose, { Document, Schema } from "mongoose";

interface IJob extends Document {
  Name: string;
  Education: string;
  City: string;
  Experience: string;
  qualities?: string;
}

const applyJobSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Education: { type: String, required: true },
  City: { type: String, required: true },
  Experience: { type: String, required: true },
  qualities: { type: String, required: true },
});

const ApplyJob = mongoose.model<IJob>("Job", applyJobSchema);

export default ApplyJob;
