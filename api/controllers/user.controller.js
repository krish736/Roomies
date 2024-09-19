import User from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { username, email, phoneNo, city} = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        username,
        email,
        phoneNo,
        city,
      },
      {
        new: true,
      }
    );
    console.log(updateUser);
    

    if (!updatedUser) {
      return next(errorHandler("404", "User Not Found!"));
    }

    res.status(200).json("Updated Successfully!");
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token").status(200).json("Signed Out Succesfully!");
  } catch (error) {
    next(error);
  }
};
