import { Request, Response, NextFunction } from "express";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
	console.log("Method:", req.method);
	console.log("Path:  ", req.path);
	console.log("Body:  ", req.body);
	console.log("---");
	next();
};

const unknownEndpoint = (req: Request, res: Response) => {
	res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(error.message);

	if (error.name === "CastError") {
		return res.status(400).send({ error: "malformatted id" });
	} else if (error.name === "ValidationError") {
		return res.status(400).json({ error: error.message });
	} else if (error.name === "JsonWebTokenError") {
		return res.status(401).json({ error: "invalid token", msg: error.message });
	} else if (error.name === "TokenExpiredError") {
		return res.status(401).json({ error: "token expired", msg: error.message });
	} else if (error.name === "MongoServerError") {
		return res.status(400).json({ error: "duplicate key", msg: error.message });
	} else if (error.name === "TypeError") {
		return res.status(400).json({ error: "type error", msg: error.message });
	}

	next(error);
};

export default { requestLogger, unknownEndpoint, errorHandler };
