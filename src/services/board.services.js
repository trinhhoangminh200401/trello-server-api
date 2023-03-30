const BoardModel = require('../models/board.model')

const createNew = async(data) =>{
    try {
        const result = await BoardModel.CreateNew(data)
        return result
    } catch (error) {
        throw new Error (error)
    }
}
const getFullBoard  = async (boardId) =>{
    try {
        const boards = await BoardModel.getFullBoard(boardId)
        boards.columns.forEach(column => {
            column.cards=boards.cards.filter(item=>(
                item.columnId.toString()  === column._id.toString()       
            ))
        });
        // sort column by columnorder, sort card by cardorder, this step for frontend
        // Remove card data from board
        delete boards.cards 
        // console.log("boards",boards.cards)
        console.log("boards",boards)

        return boards
    } catch (error) {
        throw new Error (error)
    }
}
module.exports={ 
    createNew: createNew,
    getFullBoard: getFullBoard,
}