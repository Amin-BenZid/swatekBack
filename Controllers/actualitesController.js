const Actualites = require("../Models/actualitesModel");

// find all
exports.get = async (req, res, next) => {
  try {
    const findActualites = await Actualites.find();
    if (findActualites) {
      res.send({ findActualites: findActualites }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
// get one
exports.getOne = async (req, res, next) => {
  const actualitieId = req.params.id;

  try {
    const findActualites = await Actualites.findOne({ _id: actualitieId });
    if (findActualites) {
      res.send({ findActualites: findActualites }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
// add
exports.add = async (req, res, next) => {
  req.files.file === undefined ? (file = "nothing") : (file = req.files.file[0].filename);
  try {
    const findActualites = await Actualites.create({
      photo: req.files.photo[0].filename,
      title: req.body.title,
      paragraph: req.body.paragraph,
      file: file,
      date: Date.now(),
    });
    if (findActualites) {
      res.send({ findActualites: findActualites }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
// delete
exports.delete = async (req, res) => {
  const actualitieId = req.params.id;
  try {
    const deleteActualite = await Actualites.findOneAndDelete({ _id: actualitieId });
    if (deleteActualite) {
      res.send({ result: "Actuality is deleted successfully", deleteActualite: deleteActualite }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
