const express = require('express')
const router = express.Router()
const HttpStatuscode = require('../../utilities/constant')
const Boardroute = require('./board.route')
const ColumnRoute=require('./column.route')
const CardRoute =require('./card.route')
/*
 Get  v1/status
*/
router.get('/status',(req,res) => res.status(HttpStatuscode.Ok).json({
    status:'OK!'
}))
// Board APi 
router.use('/boards',Boardroute)
// Column Api
router.use('/columns',ColumnRoute)
// Card api
router.use ('/cards',CardRoute)
module.exports = router 
