const Partenaires = require("../Models/newPartenaireModel");

// add partenaires

exports.addPartenaire = async (req, res, next) => {
  //   add
  try {
    const newPartenaire = await Partenaires.create({
      logo: req.file.filename,
      partenairesName: req.body.name,
      partenairesDes: req.body.description,
    });
    if (newPartenaire) {
      res.send({ result: "partenaires is add successfully", newPartenaire: newPartenaire }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
  next();
};

// get Partenaires

exports.getPartenaires = async (req, res, next) => {
  try {
    const findPartenaires = await Partenaires.find();
    if (findPartenaires) res.send({ result: findPartenaires }).status(200);
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};

// delete Partenaires

exports.deletePartenaires = async (req, res, next) => {
  const partenaireName = req.params.name;

  try {
    const deletePartenaires = await Partenaires.findOneAndDelete({ partenairesName: partenaireName });
    if (deletePartenaires) {
      res.send({ result: "partenaires is deleted successfully", deletePartenaires: deletePartenaires }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
