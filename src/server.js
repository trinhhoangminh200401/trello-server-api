import express from 'express';
import {mapSort} from './utilities/sort.js'
const app = express();
const hostname = 'localhost';
const port = 5000;
app.get('/', (req, res) =>{
    res.end("<h1>heloo</h1>")
})
app.listen(port,hostname,()=>{
    console.log('listening on port 5000')
})