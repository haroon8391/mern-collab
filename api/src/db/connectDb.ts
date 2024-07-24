import mongoose from "mongoose";

const connectDb = async (url: string) => {
	try {
		const conn = await mongoose.connect(url);
		console.log("Connected to database", conn.connection.host);
	} catch (error) {
		console.log("Error connecting to database", error);
	}
};

export default connectDb;
