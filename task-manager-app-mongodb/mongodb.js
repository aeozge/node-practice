const mongodb = require("mongodb");

// Give access to the function necessary to connect to db
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to databse");
    }
    console.log("connected correctly");

    const db = client.db(databaseName);

    // Insert a user
    db.collection("users").insertOne(
      {
        name: "Leo",
        age: 27,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.ops);
      }
    );

    // Insert more than one user
    db.collection("users").insertMany(
      [
        {
          name: "Lia",
          age: 21,
        },
        {
          name: "Mia",
          age: 31,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user!");
        }
        console.log(result.insertedIds);
      }
    );

    // Insert more than one tasks
    db.collection("tasks").insertMany(
      [
        {
          description: "Clean the house",
          completed: true,
        },
        {
          description: "Renew inspection",
          completed: false,
        },
        {
          description: "Pot plants",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert task!");
        }
        console.log(result.insertedIds);
      }
    );

    // Find a task by its id
    db.collection("tasks").findOne(
      { _id: new ObjectID("62bcbe4c214c003065a87502") },
      (error, task) => {
        console.log(task);
      }
    );

    // Update tasks which are incompleted to completed
    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });

    // Delete tasks which have completed
    db.collection("tasks")
      .deleteMany({
        completed: true,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
