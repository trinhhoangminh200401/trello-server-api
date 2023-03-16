const Joi = require('joi');
const Db = require('../config/mongodb.js');

const boardCollectionName="boards"
const boardCollectionSchema = Joi.object({
    title: Joi.string().required().min(3).max(30),
    columnOrder:Joi.array().items(Joi.string()).default([]),
    creatAt:Joi.date().timestamp().default(Date.now()),
    updateAt:Joi.date().timestamp().default(null),
    _destroy:Joi.boolean().default(false)
})
const validateSchema  = async (data)=>{
     return await boardCollectionSchema.validateAsync(data,{abortEarly:false})
}
const createNew = async (data)=>{
    try {
        const value = await validateSchema(data)
        const result = await Db.GetDB().collection(boardCollectionName).insertOne(value)
        console.log(result.insertedId)
        return result
        
    } catch (error) {
        console.log(error)
    }
}
 module.exports ={
    CreateNew:createNew,

 }