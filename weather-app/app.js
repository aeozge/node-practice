const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=56d813c8b9d4d1302ca2b0baa609063a&query=34.079068,-118.404821&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find the location!");
  } else {
    console.log(
      response.body.current.weather_descriptions[0],
      ". It is currently",
      response.body.current.temperature,
      "degrees out. ",
      "It feels like",
      response.body.current.feelslike,
      "degrees out."
    );
  }
});

const geoCodingUrl =
  "http://api.positionstack.com/v1/forward?access_key=7a29bb219228220f001a07944f77a1e2&query=BeverlyHills";

request({ url: geoCodingUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find the location!");
  } else {
    console.log(
      "Latitude :",
      response.body.data[0].latitude,
      "and",
      "Longitude :",
      response.body.data[0].longitude
    );
  }
});
