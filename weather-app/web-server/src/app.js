const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Lia Mia",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Lia Mia",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Lia Mia",
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "404",
    name: "Lia Mia",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "404",
    name: "Lia Mia",
    errorMessage: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
