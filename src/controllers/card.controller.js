const CardService = require("../services/card.services");
const HttpStatuscode = require("../utilities/constant");
const createNew = async (req, res) => {
  try {
    const result = await CardService.createNew(req.body);
    console.log(result);
    res.status(HttpStatuscode.Ok).json(result);
  } catch (error) {
    console.log(error);
    res.status(HttpStatuscode.Internalp_Server).json({
      errors: error.message,
    });
  }
};
module.exports={
    createNew:createNew
}