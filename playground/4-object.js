const name = "Mia";
const userAge = 22;

const user = {
  fname: name,
  userAge: userAge,
  location: "NewYork",
  hobbies: ["cooking", "garden", "music", "cars"],
};

console.log(user);
console.log(user.location);

const { fname, location, hobbies} = user;

console.log(fname);
console.log(location);
console.log(hobbies)



