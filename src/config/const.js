
require('dotenv').config({path:'../.env'});
const  MONGGO_URL= 
{
   MONGGO_URL: process.env.MONGGO_URL,
   HOST : process.env.HOST,
    POST :process.env.POST
}
module.exports = MONGGO_URL;