const { Users } = require("../models/index.cjs");
module.exports = {
  async createUser(req, res, next) {
    const { Name, Email, Password, Role } = req.body;
    try {
      const user = await Users.create({ Name, Email, Password, Role });
      return res.status(200).json({
        message: "user created successfully",
        user: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async getUsers(req, res, next) {
    try {
      const allusers = await users.findAll();
      return res.status(200).json(allusers);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "something went wrong" });
    }
  },
};
