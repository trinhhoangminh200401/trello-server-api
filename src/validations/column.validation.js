const Joi = require("joi");
const HttpStatuscode = require("../utilities/constant");
const createNew = async (req, res, next) => {
  const condition = Joi.object({
    title: Joi.string().required().min(3).max(30).trim(),
    boardId: Joi.string().required(),
  });
  try {
    await condition.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(HttpStatuscode.Bad_Request).json(error.message);
  }
};
const Update = async (req, res, next) => {
  const condition = Joi.object({
    title: Joi.string().min(3).max(30).trim(),
  });
  try {
    await condition.validateAsync(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });

    next();
  } catch (error) {
    res.status(HttpStatuscode.Bad_Request).json(error.message);
  }
};
module.exports = {
    createNew:createNew,
    Update:Update
}