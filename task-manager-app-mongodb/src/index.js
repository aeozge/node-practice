const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/mongoose");
require("dotenv").config();

const notFound = require("./middlewares/no-router");
const errorHandlerMiddleware = require('./middlewares/error-handler');

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware)

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

start();
