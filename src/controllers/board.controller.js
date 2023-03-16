const BoardService = require('../services/board.services')
const HttpStatuscode = require('../utilities/constant')
const createNew =  async (req,res) =>{
    try {
        const result = await BoardService(req.body)
        console.log(result)
        res.status(HttpStatuscode.Ok).json(result)
       
    } catch (error) {
        console.log(error)
        res.status(HttpStatuscode.Internalp_Server).json({
            errors: error.message
        })
    }
}
module.exports = createNew