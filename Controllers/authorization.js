var jwt = require("jsonwebtoken");
require("dotenv").config();

// admin authorization
exports.verifyAdminToken = async (req, res, next) => {
  try {
    var token = req.headers.authorization;
    const user = jwt.decode(token, { comlete: true });
    if (user.userIsAdmin) {
      next();
    } else {
      res.status(403).send({ error: "Access denied !!!" });
      return;
    }
  } catch {
    res.status(403).send({ error: "Access denied !!!" });
    return;
  }
};
