const BoardModel = require('../models/board.model')
const CloneDeep = require("lodash")
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
         if(!boards || !boards.columns){
            throw new Error('Board not found')
        }
        
       const cloneboard = CloneDeep.cloneDeep(boards)
       cloneboard.columns= cloneboard.columns.filter(column => !column._destroy)
        // sort column by columnorder, sort card by cardorder, this step for frontend
        // Remove card data from board
        cloneboard.columns.forEach(column => {
            column.cards=cloneboard.cards.filter(item=>(
                item.columnId.toString()  === column._id.toString()       
            ))
        });
        delete cloneboard.cards 
        console.log("boards",cloneboard)
        return cloneboard
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