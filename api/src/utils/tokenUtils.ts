import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY || "collab123";

interface VerifyTokenResult {
  valid: boolean;
  decoded?: JwtPayload | string;
  error?: string;
}

export function verifyToken(token: string): VerifyTokenResult {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error: (error as Error).message };
  }
}
