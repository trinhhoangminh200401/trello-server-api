require("dotenv").config();
const MONGGO_URL = {
  MONGGO_URL: process.env.MONGGO_URL,
  HOST: process.env.HOST,
  POST: process.env.PORT,
  DBNAME: process.env.DATABASE_NAME,
};
module.exports = MONGGO_URL;
