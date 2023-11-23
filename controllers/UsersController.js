import Users from "../models/users.js";

// Create new user
export const createUser = async (req, res, next) => {
  const { Name, Email, Password, Role } = req.body;
  try {
    const newUser = await Users.create({
      Name,
      Email,
      Password,
      Role,
    });
    return res
      .status(200)
      .json({ message: "user created successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "user couldn't be created" });
  }
};
// Fetch all users
export const getAll = async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "cannot fetch users" });
  }
};

// Update user

export const updateUser = async (req, res, next) => {
  try {
    const { Name, Email, Password, Role } = req.body;
    await Users.update({ Name, Email, Password, Role }),
      {
        where: { Name: req.body },
      };
    return res.status(200).json({ message: "user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Trouble updating user info" });
  }
};
