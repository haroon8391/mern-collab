import app from "./app";
import config from "./utils/config";
import connectDb from "./db/connectDb";

const start = async () => {
	await connectDb(config.MONGODB_URI);
	app.listen(config.PORT, () => {
		console.log(`Server running on port ${config.PORT}`);
	});
};

start();
