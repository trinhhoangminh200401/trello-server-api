const ColumnService = require('../services/column.services')
const HttpStatuscode = require('../utilities/constant')
const createNew =  async (req,res) =>{
    try {
        const result = await ColumnService.createNew(req.body)
        console.log(result)
        res.status(HttpStatuscode.Ok).json(result)
       
    } catch (error) {
        console.log(error)
        res.status(HttpStatuscode.Internalp_Server).json({
            errors: error.message
        })
    }
}
const Update = async (req, res) =>{
    try {
        const { id }=req.params
        const result = await ColumnService.update(id,req.body)
        console.log(result)
        res.status(HttpStatuscode.Ok).json(result)
       
    } catch (error) {
        console.log(error)
        res.status(HttpStatuscode.Internalp_Server).json({
            errors: error.message
        })
    }
}
module.exports= {
    createNew: createNew,
    update:Update
}