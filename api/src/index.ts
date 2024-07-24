import app from "./app";
import config from "./utils/config";

// Start the server
const start = async () => {
	app.listen(config.PORT, () => {
		console.log(`Server running on port ${config.PORT}`);
	});
};

start();
