import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authorized = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(404).json({ message: "user not authorized" });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(404).json({ message: "user not authorized" });
  }
};

export default authorized;
