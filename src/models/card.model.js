const Joi = require("joi");
const Db = require("../config/mongodb.js");

const cardCollectionName = "cards";
const cardCollectionSchema = Joi.object({
  boardId: Joi.string().required(),
  columnId: Joi.string().required(),
  title: Joi.string().required().min(3).max(30).trim(),
  cover:Joi.string().default(null),
  creatAt: Joi.date().timestamp().default(Date.now()),
  updateAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});
const validateSchema = async (data) => {
  return await cardCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const value = await validateSchema(data);
    const result = await Db.GetDB()
      .collection(cardCollectionName)
      .insertOne(value);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports={
    createNew:createNew
}