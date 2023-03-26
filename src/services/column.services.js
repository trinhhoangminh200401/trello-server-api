const ColumnModel = require("../models/column.model");

const createNew = async (data) => {
  try {
    const result = await ColumnModel.CreateNew(data);
    return result;
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
