const mongodb = require("mongodb");
const MONGGO_URL = require("./const");
let dbInstance = null;
const ConnectDB = async () => {
  const client = new mongodb.MongoClient(MONGGO_URL.MONGGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  //  connect client to server
  await client.connect();
  dbInstance = client.db(MONGGO_URL.DBNAME);
};
const getDB = () => {
  if (!dbInstance) throw new Error("Error connecting you have to connect first");
  return dbInstance;
};
module.exports={
    connectDB:ConnectDB,
    GetDB:getDB,
}
