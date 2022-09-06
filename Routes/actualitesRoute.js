const express = require("express");
const router = express.Router();
const multer = require("multer");

const actualites = require("../Controllers/actualitesController");
const { verifyAdminToken } = require("../Controllers/authorization");

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
  const allowedFileTypes = ["photo/jpeg", "photo/jpg", "photo/png", "file/pdf"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage });
const multipleUpload = upload.fields([{ name: "photo" }, { name: "file" }]);

// get all the actualites
router.get("/all", actualites.get);
// find one
router.get("/one/:id", actualites.getOne);

// post actualites
router.post("/add", verifyAdminToken, multipleUpload, actualites.add);
// delete actualites
router.delete("/delete/:id", verifyAdminToken, actualites.delete);

module.exports = router;
