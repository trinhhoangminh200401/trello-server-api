const express = require("express")
const router = express.Router()
const ColumnController = require('../../controllers/column.controller')
const ColumnValidate = require('../../validations/column.validation')
router.route('/')
    // .get((req,res)=>console.log('Get-Board'))
    .post(ColumnValidate.createNew,ColumnController.createNew)
 router.route('/:id')
    // .get((req,res)=>console.log('Get-Board'))
    .put(ColumnValidate.Update,ColumnController.update)   
module.exports = router