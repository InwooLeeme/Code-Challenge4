import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log(`Listening!`);
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

// routes
app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", handleProtected);

// Codesanbox does not need PORT :)
app.listen(PORT, handleListening);
