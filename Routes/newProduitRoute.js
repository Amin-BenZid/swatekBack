const express = require("express");
const multer = require("multer");
const router = express.Router();
const { verifyAdminToken } = require("../Controllers/authorization");
const produitsController = require("../Controllers/produitsController");

// mumter config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

// get prduit
router.get("/get", produitsController.getProduit);
// add prduit
router.post("/add", verifyAdminToken, upload.single("logo"), produitsController.addProduit);
// edit prduit
router.patch("/edit/:id", verifyAdminToken, produitsController.editProduit);
// delete prduit
router.delete("/delete/:name", verifyAdminToken, produitsController.deleteProduit);

module.exports = router;
