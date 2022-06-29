const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const geocode = require("../../utils/geocode");
const forecast = require("../../utils/forecast");

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
    name: "Ozge",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Ozge",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Ozge",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  console.log(req.query.address);

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    console.log("Geocoding...");
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      console.log("Forecasting...");
      if (error) {
        return res.send({ error });
      }
      //console.log(location)
      //console.log(forecastData);

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "404",
    name: "Ozge",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "404",
    name: "Ozge",
    errorMessage: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
