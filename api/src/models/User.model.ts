import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

// Define the User interface
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define the User schema
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
});

// Add the comparePassword method to the User schema
userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create the User model
const User = mongoose.model<IUser>("User", userSchema);

export default User;
