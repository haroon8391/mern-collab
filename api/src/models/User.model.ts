import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
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
});

userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();

		delete returnedObject.password;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const User = mongoose.model("User", userSchema);

export default User;
