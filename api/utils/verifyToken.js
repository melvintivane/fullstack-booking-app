import { createError } from "../utils/error.js";
import pkg from "jsonwebtoken";
const { verify } = pkg;

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You're not Authenticated!"));
  }

  verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(createError(403, "Token is not valid"));
    req.user = user;
    next();
  });
};
