const express = require("express")
const router = express.Router()
const BoardController = require('../../controllers/board.controller')
const BoardValidate = require('../../validations/board.validation')
router.route('/')
    // .get((req,res)=>console.log('Get-Board'))
    .post(BoardValidate,BoardController.createNew)
router.route('/:id')
    .get(BoardController.getFullBoard)

module.exports = router
