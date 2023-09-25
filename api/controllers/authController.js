import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      city: req.body.city,
      password: req.body.password,
    });

    await newUser.save()
    res.status(201).send("User has been created sucessfully.")
  } catch (error) {
    next(error);
  }
};
