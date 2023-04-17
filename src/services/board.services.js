const BoardModel = require('../models/board.model')

const createNew = async(data) =>{
    try {
        const result = await BoardModel.CreateNew(data)
        result.card=[]
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
         if(!boards || !boards.columns){
            throw new Error('Board not found')
        }
        // sort column by columnorder, sort card by cardorder, this step for frontend
        // Remove card data from board
        delete boards.cards 
        console.log("boards",boards)
        return boards
    } catch (error) {
        console.log(error)
        throw new Error (error)
    }
    
}
// const Update = async (id,data) => {
//     try {
//       const updatedataNow ={
//           ...data,
//           updateAt:Date.now()
//       }
//       const result = await BoardModel.update(id,updatedataNow);
//       return result;
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
module.exports={ 
    createNew: createNew,
    getFullBoard: getFullBoard,
}