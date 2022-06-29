const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=7a29bb219228220f001a07944f77a1e2&query=" +
    address +
    "&output=json";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined)
    } else if (body.data.length === 0) {
      callback("Unable to find the location!", undefined)
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name
      });
      console.log('latitude:', body.data[0].latitude,
        'longitude:', body.data[0].longitude,
       'location:', body.data[0].name)
    }
  });
};

module.exports = geocode;
