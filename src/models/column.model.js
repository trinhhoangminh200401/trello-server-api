const Joi = require("joi");
const { ObjectId } = require("mongodb");
const Db = require("../config/mongodb.js");

const columnCollectionName = "columns";
const columnCollectionSchema = Joi.object({
  boardId: Joi.string().required(),
  title: Joi.string().required().min(3).max(30).trim(),
  cardOrder: Joi.array().items(Joi.string()).default([]),
  creatAt: Joi.date().timestamp().default(Date.now()),
  updateAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});
const validateSchema = async (data) => {
  return await columnCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};
const pushCardOrder = async (columnId,CardId) =>{
  try {
    const result = await  Db.GetDB()
    .collection(columnCollectionName)
    . findOneAndUpdate(
      {_id: new ObjectId(columnId)},
      {$push:{cardOrder:CardId}},
      {returnOriginal:false}
      );
      return result
  } catch (error) {
    throw new Error(error);
  }
}
const findOneByid = async (id) => {
  try {
    const result = await Db.GetDB()
      .collection(columnCollectionName)
      .findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {}
};
const createNew = async (data) => {
  try {
    const value = await validateSchema(data);
    const insertValue = {
      ...value,
      boardId: new ObjectId(value.boardId),
    };
    const result = await Db.GetDB()
      .collection(columnCollectionName)
      .insertOne(insertValue);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const update = async (id, data) => {
  try {
    const udpateData ={
      ...data,
     boardId:  new ObjectId(data.boardId)
    }
    const result = await Db.GetDB()
      .collection(columnCollectionName)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: udpateData,
        },
        {
          returnOriginal: false,
        }
      );
    
    return result.value;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  CreateNew: createNew,
  update: update,
  pushCardOrder:pushCardOrder,
  findOneByid: findOneByid,
  columnCollectionName:columnCollectionName,
};
