const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require('./db/mongoose')
require('dotenv').config()

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("fefef");
});

app.use("/tasks", tasks);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

start()
