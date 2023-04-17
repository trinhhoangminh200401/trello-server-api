const express = require("express");
const mapSort = require("./utilities/sort.js");
const cors = require("cors");
const corsOptions = require('./config/cors.js')
const db = require("./config/mongodb.js");
const MONGGO_URL = require("./config/const.js");
const Boardmodel = require("./models/board.model");
const routerBoard = require("./routes/v1");
db.connectDB()
  .then(() => console.log("successfully to connect database server"))
  .then(() => server())
  .catch((err) => {
    console.log(err);
    process.exit();
  });
const server = () => {
  const app = express();
  // Enable req.body dat
  app.use(cors(corsOptions));
  app.use(express.json());
  // Use API v1
  app.use("/v1", routerBoard);
  app.listen(MONGGO_URL.POST, MONGGO_URL.HOST, () => {
    console.log(`listening on ${MONGGO_URL.HOST} ${MONGGO_URL.POST} `);
  });
};
