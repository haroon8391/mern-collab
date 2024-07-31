import mongoose, { Document, Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../utils/config";

interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	admin: boolean;
	comparePassword(candidatePassword: string): Promise<boolean>;
	createJWT(): string;
}

// Define the User schema
const userSchema = new Schema<IUser>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	admin: {
		type: Boolean,
		default: false,
	},
});

userSchema.pre("save", async function () {
	const salt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (
	candidatePassword: string
) {
	return await bcryptjs.compare(candidatePassword, this.password);
};

userSchema.methods.createJWT = function () {
	const userForToken = { userId: this._id, name: this.name };
	const token = jwt.sign(userForToken, config.JWT_SECRET, { expiresIn: "1h" });
	return token;
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
