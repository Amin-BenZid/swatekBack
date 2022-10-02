const express = require("express");
const router = express.Router();
const { verifyAdminToken } = require("../Controllers/authorization");
const multer = require("multer");
const partenairesController = require("../Controllers/partenairesController");

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

// get Partenaires
router.get("/get", partenairesController.getPartenaires);
// add partenaires
router.post("/add", verifyAdminToken, upload.single("logo"), partenairesController.addPartenaire);
// edit partenaires
router.patch("/edit/:id", verifyAdminToken, partenairesController.editPartenaire);
// delete partenaires
router.delete("/delete/:name", verifyAdminToken, partenairesController.deletePartenaires);

module.exports = router;
