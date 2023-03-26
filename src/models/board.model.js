const Joi = require("joi");
const { ObjectId } = require("mongodb");
const Db = require("../config/mongodb.js");

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
const getFullBoard = async (boardid) => {
  try {
    const result = await Db.GetDB()
      .collection(boardCollectionName)
      .aggregate([
        {
          $match: {
            _id: new ObjectId(boardid),
          },
        },
        {
          $lookup: {
            from: "columns",
            localField: "_id",
            foreignField: "boarId",
            as: "columns",
          },
        },
      ]).toArray()
      console.log(result)
      return result
  } catch (error) {}
};
module.exports = {
  CreateNew: createNew,
};
