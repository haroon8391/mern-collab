import mongoose, { Document, Schema } from "mongoose";

interface IJob extends Document {
  Name: string;
  Education: string;
  City: string;
  Experience: string;
  qualities?: string;
}

const JobSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Education: { type: String, required: true },
  City: { type: String, required: true },
  Experience: { type: String, required: true },
  qualities: { type: String, required: true },
});

const Job = mongoose.model<IJob>("Job", JobSchema);

export default Job;
