import dotenv from "dotenv";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3001;

export default {
	PORT,
};
