const Contact = require("../Models/contactModel");

exports.addContact = async (req, res, next) => {
  //   new contact data
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const location = req.body.location;
  const sujet = req.body.sujet;
  const message = req.body.message;
  //   add
  try {
    const newContact = await Contact.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
      sujet: sujet,
      message: message,
    });
    if (newContact) {
      res.send({ result: "Produit is add successfully", newContact: newContact }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};

// get Produit

exports.getContact = async (req, res, next) => {
  try {
    const findContact = await Contact.find();
    if (findContact) {
      res.send({ findContact: findContact }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
