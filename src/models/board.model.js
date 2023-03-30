const Joi = require("joi");
const { ObjectId } = require("mongodb");
const Db = require("../config/mongodb.js");
const ColumnModel = require('./column.model')
const CardModel = require('./card.model')
const boardCollectionName = "boards";
const boardCollectionSchema = Joi.object({
  title: Joi.string().required().min(3).max(30).trim(),
  columnOrder: Joi.array().items(Joi.string()).default([]),
  creatAt: Joi.date().timestamp().default(Date.now()),
  updateAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});
const validateSchema = async (data) => {
  return await boardCollectionSchema.validateAsync(data, { abortEarly: false });
};
const createNew = async (data) => {
  try {
    const value = await validateSchema(data);
    const result = await Db.GetDB()
      .collection(boardCollectionName)
      .insertOne(value);

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const pushColumnOrder = async (boardId,columnId) =>{
  try {
    const result = await  Db.GetDB()
    .collection(boardCollectionName)
    . findOneAndUpdate(
      {_id: new ObjectId(boardId)},
      {$push:{columnOrder:columnId}},
      {returnOriginal:false}
      );
      return result
  } catch (error) {
    throw new Error(error);
  }
}
const getFullBoard = async (boardId) => {
  try {
    const result = await Db.GetDB()
      .collection(boardCollectionName)
      .aggregate([
        {
          $match: {
            _id: new ObjectId(boardId),
          },
        },
        {
          $lookup: {
            from: ColumnModel.columnCollectionName,
            localField: "_id",
            foreignField: "boardId",
            as: "columns",
          },
        },
        {
          $lookup: {
            from: CardModel.cardCollectionName,
            localField: "_id",
            foreignField: "boardId",
            as: "cards",
          },
        },
      ])
      .toArray();
      // console.log(result[0])
    return result[0];
  } catch  {

      throw new Error({msg:"Không tìm thấy Id"}.msg)
  }
};
module.exports = {
  CreateNew: createNew,
  getFullBoard: getFullBoard,
  pushColumnOrder:pushColumnOrder
};
