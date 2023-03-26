const CardModel = require('../models/card.model')

const createNew = async(data) =>{
    try {
        const result = await CardModel.createNew(data)
        return result
    } catch (error) {
        throw new Error (error)
    }
}
module.exports={
    createNew:createNew
}