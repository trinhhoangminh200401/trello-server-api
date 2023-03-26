const express = require("express")
const router = express.Router()
const CardController = require('../../controllers/card.controller')
const CardValidate = require('../../validations/card.validation')
router.route('/')
    // .get((req,res)=>console.log('Get-Board'))
    .post(CardValidate.createNew,CardController.createNew)
  
module.exports = router