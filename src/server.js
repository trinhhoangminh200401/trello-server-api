const express = require('express');
const mapSort = require('./utilities/sort.js');
const db=require("./config/mongodb.js")
const  MONGGO_URL  = require('./config/const.js');
const Boardmodel = require("./models/board.model")
db.connectDB().
then(()=> console.log("successfully to connect database server"))
.then(()=> server())
.catch((err)=>{
    console.log(err)
    process.exit()
}
 )
const server =()=>{
    const app = express();
    app.get('/test', async (req, res) =>{
        res.end("<h1>heloo</h1>")
    })
    app.listen(MONGGO_URL.POST,MONGGO_URL.HOST,()=>{
        console.log(`listening on ${MONGGO_URL.HOST} ${MONGGO_URL.POST} `)
    })
}
