const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.authenticateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      const error = new Error("username and password are required");
      error.status = 400;
      return next(error);
    }
    const foundUser = await User.findOne({ username });
    console.log(foundUser);
    if (!foundUser) {
      const error = new Error(" doesn't exist");
      error.status = 404;
      return next(error);
    }

    const comparedPassword = await bcrypt.compare(password, foundUser.password);

    if (!comparedPassword) {
      const error = new Error("Incorrect  or password");
      error.status = 400;
      return next(error);
    }

    req.user = foundUser;
    next();
  } catch (error) {
    next(error);
  }
};

const verifyAccessToken = async (token) => {
  try {
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);
    return { success: true, data: decodedData };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Please log in to proceed" });
    }

    const result = await verifyAccessToken(token);

    if (!result.success) {
      return res.status(403).json({ error: result.error });
    }

    if (Date.now() > result.data.exp) {
      return res.sendStatus(401);
    }

    req.user = result.data;
    next();
  } catch (error) {
    next(error);
  }
};
