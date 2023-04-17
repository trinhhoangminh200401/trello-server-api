const express = require("express")
const router = express.Router()
const BoardController = require('../../controllers/board.controller')
const BoardValidate = require('../../validations/board.validation')
router.route('/')
    // .get((req,res)=>console.log('Get-Board'))
    .post(BoardValidate.createNew,BoardController.createNew)
router.route('/:id')
    .get(BoardController.getFullBoard)
    // .put(BoardValidate.Update, BoardController.Update)

module.exports = router
