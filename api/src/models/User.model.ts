import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../utils/config";

interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	role: "user" | "admin";
	jobs: mongoose.Schema.Types.ObjectId[];
	comparePassword(password: string): Promise<boolean>;
	createJWT(): string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Username is required"],
		minlength: [3, "Username must be at least 3 characters long"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		minlength: [6, "Email must be at least 6 characters long"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [6, "Password must be at least 6 characters long"],
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: "user",
	},
	jobs: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Job",
		},
	],
});

userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();

		delete returnedObject.password;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

userSchema.pre("save", async function () {
	const salt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (password: string) {
	return await bcryptjs.compare(password, this.password);
};

userSchema.methods.createJWT = function () {
	const payload = { userId: this._id, role: this.role };
	const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
		expiresIn: "1d",
	});
	return token;
};

const User = mongoose.model("User", userSchema);

export default User;
