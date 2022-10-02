const Produits = require("../Models/newProduitModel");

exports.addProduit = async (req, res, next) => {
  //   add
  try {
    const newProduit = await Produits.create({
      logo: req.file.filename,
      ProduitName: req.body.name,
      ProduitDes: req.body.description,
    });
    if (newProduit) {
      res.send({ result: "Produit is added successfully", newProduit: newProduit }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};

// get Produit

exports.getProduit = async (req, res, next) => {
  try {
    const findProduits = await Produits.find();
    if (findProduits) {
      res.send({ findProduits: findProduits }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};

// delete Produit

exports.deleteProduit = async (req, res, next) => {
  const produitName = req.params.name;
  try {
    const deleteProduit = await Produits.findOneAndDelete({ ProduitName: produitName });
    if (deleteProduit) {
      res.send({ result: "Produit is deleted successfully", deleteProduit: deleteProduit }).status(200);
    }
  } catch (err) {
    res.status(400);
    res.send({ error: err.message });
  }
};
// edit produit
exports.editProduit = async (req, res, next) => {
  try {
    Produits.findOneAndUpdate(
      { _id: req.params.id },
      { ProduitName: req.body.name, ProduitDes: req.body.description },
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
