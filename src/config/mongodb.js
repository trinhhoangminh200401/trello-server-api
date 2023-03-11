const mongodb= require('mongodb');
const MONGGO_URL = require('./const');
// olpUDUWEFxVzKhJn
const ConnectDB = async ()=>{
    const client = new mongodb.MongoClient(MONGGO_URL.MONGGO_URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    try {
        
        //  connect client to server
        await client.connect()
        console.log("Connect successfully to server")
        // list db
        await ListDB(client)
       
    }finally{
        // close when finished or error
        await client.close();
    }
}
const ListDB = async (client)=>{
    const DBS = await client.db().admin().listDatabases();
    //   return  api
    
    DBS.databases.forEach(db => {
       return  console.log(`\n  -${db.name}` ) 
    }); 
}

module.exports = ConnectDB