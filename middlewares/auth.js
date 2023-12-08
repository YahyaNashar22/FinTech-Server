import { verifyToken } from "../utils/token.js";

// export const authorized = (roles) => {
//   return (req, res, next) => {
//     const token = req.cookies.access_token;
//     if (!token) {
//       return res.status(404).json({
//         error: 404,
//         message: "Not authorized",
//       });
//     }
//     try {
//       const data = verifyToken(token);
//       req.id = data.id;
//       req.Role = data.Role;
//       if (roles.includes(req.Role)) {
//         console.log("user authorized");
//         return next();
//       }
//     } catch {
//       return res.status(404).json({
//         error: 404,
//         message: "Not authorized",
//       });
//     }
//   };
// };

export const authorized = async (req, res, next) => {
  try {
    // const token = req.headers.authorization?.split(" ")[1];
    const token = req.cookies.access_token;
    if (!token) {
      return res.json({ message: "No token!" });
    }
    const decoded = verifyToken(token);
    req.id = decoded.data.id;
    req.role = decoded.data.Role;
  } catch (error) {
    console.log(error);
  }
  next();
};

export const checkRole = (role) => {
  return (req, res, next) => {
    try {
      if (role.includes(req.role)) {
        console.log("user authorized");
        next();
      } else {
        res.status(500).send("Not allowed");
      }
    } catch {
      return res.status(404).json({
        error: 404,
        message: "Not authorized",
      });
    }
  };
};
