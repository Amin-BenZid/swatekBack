const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const newPartenairesRoute = require("./Routes/newPartenairesRoute");
const newProduitRoute = require("./Routes/newProduitRoute");
const newContactRoute = require("./Routes/newContactRoute");
const loginRoute = require("./Routes/loginRoute");
const actualitesRoute = require("./Routes/actualitesRoute");

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const URL = DB_URL + DB_NAME;
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// connecting to database
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log(err));

// home page
app.get("/api/", (req, res) => {
  res.send({ welcome: "welcome" });
});
// partenaires
app.use("/api/partenaires", newPartenairesRoute);

// pruidts
app.use("/api/produits", newProduitRoute);

// contact
app.use("/api/contact", newContactRoute);

// actualites
app.use("/api/actualites", actualitesRoute);

// login
app.use("/api/admin", loginRoute);

// connecting to server
app.listen(PORT, () => {
  console.log("Connected ! PORT =", PORT);
});
