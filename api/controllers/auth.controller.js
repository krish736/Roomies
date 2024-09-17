import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    !username ||
    !email ||
    !password
  ) {
    return next(errorHandler(400, "all fields are required"));
  }

  const hashpassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  try {
    await newUser.save();
    res.status(200).json("sign up success");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === "" || password === "" || !email || !password) {
    return next(errorHandler(400, "all fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler("400", "User not found!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler("400", "Invalid Password"));
    }

    const { password: pass, ...rest } = validUser._doc;

    const token = jwt.sign(
      {
        id: validUser._id,
        isAdmin: validUser.isAdmin,
      },
      process.env.JWT_SECRET
    );

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
