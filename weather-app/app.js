const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location }) => {
  console.log("Geocoding...");
  if(error){
    return console.log(error)
  }
  forecast(latitude, longitude, (error, forecastData) => {
    console.log("Forecasting...");
    if(error){
      return console.log(error)
    }
    console.log(location)
    console.log(forecastData);
  });
});
