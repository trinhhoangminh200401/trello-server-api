const express = require('express')
const router = express.Router()
const HttpStatuscode = require('../../utilities/constant')
const Boardroute = require('./board.route')
/*
 Get  v1/status
*/
router.get('/status',(req,res) => res.status(HttpStatuscode.Ok).json({
    status:'OK!'
}))
// Board APi 
router.use('/boards',Boardroute)
module.exports = router 
