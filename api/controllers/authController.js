import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      city: req.body.city,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created sucessfully.");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found."));

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return res.status(400).send("Wrong Password or Username.");

    const {password, isAdmin, ...otherDetails} = user._doc;

    return res.status(200).json({...otherDetails});
  } catch (error) {
    next(error);
  }
};
