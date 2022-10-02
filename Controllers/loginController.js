const Login = require("../Models/loginModel");
const Contact = require("../Models/contactModel");

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginAdmin = async (req, res, next) => {
  try {
    // login database
    const email = req.body.email;
    const password = req.body.password;

    const user = await Login.findOne({ email: email });
    if (!user) {
      res.status(400);
    }

    if (password === user.password) {
      const JWT_KEY = process.env.JWT_KEY;
      const token = jwt.sign({ user_ID: user._id, email: user.email, userIsAdmin: user.isAdmin }, JWT_KEY);
      res.send({ result: "Admin loged in", user: user, token: token }).status(200);
    } else {
      res.status(400);
      res.send("Email or password is incorrect");
    }
  } catch (err) {
    res.send(err.message).status(400);
  }
  next();
};

exports.contacts = async (req, res, next) => {
  try {
    const messages = await Contact.find();
    if (messages) {
      res.send({ messages: messages }).status(200);
    }
  } catch {
    res.send(err.message).status(400);
  }
};
