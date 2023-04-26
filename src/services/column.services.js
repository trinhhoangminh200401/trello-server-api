const ColumnModel = require("../models/column.model");
const BoardModel = require("../models/board.model")
const CardModel = require("../models/card.model")
const createNew = async (data) => {
  try {
    const create = await ColumnModel.CreateNew(data);
    const getNewColumn = await ColumnModel.findOneByid(create.insertedId.toString())
   await BoardModel.pushColumnOrder(getNewColumn.boardId.toString(),getNewColumn._id.toString())
   console.log(getNewColumn)
    return getNewColumn;
  } catch (error) {
    throw new Error(error);
  }
};
const update = async (id,data) => {
  try {
    const updatedataNow ={
        ...data,
        updateAt:Date.now()
    }
    if(updatedataNow._id) delete updatedataNow._id
    if(updatedataNow.cards) delete updatedataNow.cards
    if(updatedataNow._destroy){
          CardModel.DeleteMany(updatedataNow.cardOrder)
    }
    const result = await ColumnModel.update(id,updatedataNow);
    
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { createNew: createNew ,update:update};
