const Equipe = require("../Models/equipeModel");

// get equipe
exports.getEquipes = async (req, res, next) => {
  try {
    const findEquipes = await Equipe.find();
    if (findEquipes) res.send({ result: findEquipes }).status(200);
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};

// add member

exports.addMember = async (req, res, next) => {
  //   add
  try {
    const newMember = await Equipe.create({
      photo: req.file.filename,
      memberName: req.body.name,
      memberRole: req.body.role,
      memberDes: req.body.description,
    });
    if (newMember) {
      res.send({ result: "member is added successfully", newMember: newMember }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
  next();
};

// delete member
exports.deleteMember = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletePartenaires = await Equipe.findOneAndDelete({ _id: id });
    if (deletePartenaires) {
      res.send({ result: "member is deleted successfully", deleteData: deletePartenaires }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
// edit member
exports.editMember = async (req, res, next) => {
  try {
    Equipe.findOneAndUpdate(
      { _id: req.params.id },
      { memberName: req.body.name, memberDes: req.body.description },
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
