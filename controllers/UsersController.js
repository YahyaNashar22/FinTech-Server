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
      Picture: req.file.filename,
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
    res.status(500).json({ error: "cannot fetch users" });
  }
};
// Fetch one user by ID
export const getOne = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await Users.findOne({ where: { id } });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldn't find user" });
  }
};
// Update user

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  req.body.image = req.file.path;
  try {
    const { Name, Email, Password } = req.body;
    await Users.update(
      { Name, Email, Password, Picture: req.file.filename },
      {
        where: { id },
      }
    );
    return res.status(200).json({ message: "user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Trouble updating user info" });
  }
};

// Delete user

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Users.destroy({ where: { id } });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: " could not delete user" });
  }
};
