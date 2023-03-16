const BoardModel = require('../models/board.model')

const createNew = async(data) =>{
    try {
        const result = await BoardModel.CreateNew(data)
        return result
    } catch (error) {
        throw new Error (error)
    }
}
module.exports=createNew