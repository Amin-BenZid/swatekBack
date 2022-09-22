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
// edit
exports.edit = async (req, res) => {
  try {
    Actualites.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.name, paragraph: req.body.description },
      (err, data) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          res.status(200).send({ data: data });
        }
      }
    );
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
