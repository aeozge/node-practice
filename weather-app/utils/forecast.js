const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=56d813c8b9d4d1302ca2b0baa609063a&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  //console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find the location!");
    } else {
      callback({
        description: "It is currently " + body.current.weather_descriptions[0],
        temperature: " The temperature " + body.current.temperature + " degress out.",
        precip: "There is a " + body.current.precip + " % chance of rain.",
      });
    }
  });
};

module.exports = forecast;
