import app from "./app";
import config from "./utils/config";
import connectDb from "./db/connectDb";

// Start the server
const start = async () => {
	// Connect to the database
	await connectDb(config.MONGODB_URI);
	app.listen(config.PORT, () => {
		console.log(`Server running on port ${config.PORT}`);
	});
};

start();
