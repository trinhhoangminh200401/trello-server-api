const LISTDOMAIN = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
  origin: function (origin, callback) {
    if (LISTDOMAIN.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`${origin} Not allowed by CORS`));
    }
    optionsSuccessStatus: 200; // some legacy browsers (IE11, various SmartTVs) choke on 204
  },
};
module.exports =corsOptions