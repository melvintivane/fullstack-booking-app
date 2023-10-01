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

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, () => {
//     // Verifique se req.user está definido e se o usuário é o dono da conta ou um administrador.
//     if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
//       next();
//     } else {
//       return next(createError(403, "You're not allowed."));
//     }
//   });
// };

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     // Verifique se req.user está definido e se o usuário é um administrador.
//     if (req.user && req.user.isAdmin === true) {
//       next();
//     } else {
//       return next(createError(403, "You're not allowed."));
//     }
//   });
// };


export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You're not Authenticated!"));
  }

  verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(createError(403, "Token is not valid"));

    // Verifique se req.user está definido e se o usuário é o dono da conta ou um administrador.
    if (user && (user.id === req.params.id || user.isAdmin)) {
      req.user = user;
      next();
    } else {
      return next(createError(403, "You're not allowed."));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You're not Authenticated!"));
  }

  verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(createError(403, "Token is not valid"));

    // Verifique se req.user está definido e se o usuário é um administrador.
    if (user && user.isAdmin === true) {
      req.user = user;
      next();
    } else {
      return next(createError(403, "You're not allowed."));
    }
  });
};
