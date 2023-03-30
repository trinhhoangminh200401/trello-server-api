const CardModel = require('../models/card.model')
const ColumnModel = require('../models/column.model')

const createNew = async(data) =>{
    try {
        const createCard = await CardModel.createNew(data)

        const getNewCard = await CardModel.findOneByid(createCard.insertedId.toString())
        await ColumnModel.pushCardOrder(getNewCard.columnId.toString(),getNewCard._id.toString())
        return createCard
    } catch (error) {
        throw new Error (error)
    }
}
module.exports={
    createNew:createNew
}