const ColumnModel = require("../models/column.model");
const BoardModel = require("../models/board.model")
// const CardModel = re
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
    const result = await ColumnModel.update(id,updatedataNow);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { createNew: createNew ,update:update};
