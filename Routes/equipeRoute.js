const express = require("express");
const router = express.Router();
const multer = require("multer");
const { verifyAdminToken } = require("../Controllers/authorization");
const equiprController = require("../Controllers/equiprController");

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

// get equipe
router.get("/get", equiprController.getEquipes);

// add memebr
router.post("/add", verifyAdminToken, upload.single("photo"), equiprController.addMember);

// edit member
router.patch("/edit/:id", verifyAdminToken, equiprController.editMember);

// delete member
router.delete("/delete/:id", verifyAdminToken, equiprController.deleteMember);

module.exports = router;
