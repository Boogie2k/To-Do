const express = require("express");
const app = express();
const task = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", task);

const start = async () => {
  await connectDB(process.env.MONG_URI);
  app.listen(5000, console.log("server is up"));
};

start();
