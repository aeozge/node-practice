setTimeout(() => {
  console.log("Three seconds are up");
}, 3000);

const names = ["Andy", "Max", "Julie"];
const shortNames = names.filter((name) => name.length <= 4);

console.log(shortNames);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    //return data;
    callback(data);
  }, 2000);
};

geocode("New york", (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

add(2, 6, (sum) => {
  console.log("sum of two :", sum);
});
