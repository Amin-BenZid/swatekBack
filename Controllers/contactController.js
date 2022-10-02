const Contact = require("../Models/contactModel");

exports.addContact = async (req, res, next) => {
  //   add
  try {
    const newContact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      location: req.body.location,
      sujet: req.body.sujet,
      message: req.body.message,
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

// delete Contact
exports.deleteContact = async (req, res) => {
  const id = req.params.id;

  try {
    const deletePartenaires = await Contact.findOneAndDelete({ _id: id });
    if (deletePartenaires) {
      res.send({ result: "contact is deleted successfully", deleteData: deletePartenaires }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
