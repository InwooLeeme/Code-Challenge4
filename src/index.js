import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log("Listening");
};

const handleHome = (req, res) => {
  res.send("Hi! From Home");
};

const handleAboutUs = (req, res) => {
  res.send("About Us");
};

const handleContact = (req, res) => {
  res.send("Contact");
};

const handleProtected = (req, res) => {
  res.send("Protected");
};

// Middleware zone

const Console = (req, res, next) => {
  console.log(`I'm middlewares`);
  next();
};

const Protected = (req, res, next) => {
  console.log(`This page is protected`);
  res.redirect("/");
};

// routes
app.use(Console);
app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", Protected, handleProtected);

// Codesanbox does not need PORT :)
app.listen(PORT, handleListening);
