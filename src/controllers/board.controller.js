const BoardService = require("../services/board.services");
const HttpStatuscode = require("../utilities/constant");
const createNew = async (req, res) => {
  try {
    const result = await BoardService.createNew(req.body);
    console.log(result);
    res.status(HttpStatuscode.Ok).json(result);
  } catch (error) {
    console.log(error);
    res.status(HttpStatuscode.Internalp_Server).json({
      errors: error.message,
    });
  }
};
const getFullBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BoardService.getFullBoard(id);
    return result
  } catch (error) {
    res.status(HttpStatuscode.Internalp_Server).json({
      errors: error.message,
    });
  }
};
module.exports = { createNew: createNew, getFullBoard: getFullBoard };
