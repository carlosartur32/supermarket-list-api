require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const app = express();
app.use(express.json());
const port = Number(process.env.PORT) || 3333;

async function connectDatabase() {
  await mongoose.connect(process.env.DATABASE_URL);
}

app.listen(port, () => {
  connectDatabase().catch((error) => {
    console.log(`Error connecting database: ${error}`);
  });
  app.use("/", routes);
  console.log("App is running at port 3333.");
});
