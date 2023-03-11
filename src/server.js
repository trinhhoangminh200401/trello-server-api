const express = require('express');
const mapSort = require('./utilities/sort.js');
const ConnectDB = require('./config/mongodb.js');
const { MONGGO_URL } = require('./config/const.js');
const app = express();
;
ConnectDB().catch(console.log)
app.get('/', (req, res) =>{
    res.end("<h1>heloo</h1>")
})
app.listen(MONGGO_URL.POST,MONGGO_URL.HOST,()=>{
    console.log('listening on port 5000')
})