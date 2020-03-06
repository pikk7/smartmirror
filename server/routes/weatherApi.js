
var express = require("express");
var router = express.Router();
// const https = require("https");
var OAuth = require("oauth");

router.get("/", function(req, res, next) {
const weatherApiEndpoint = "https://weather-ydn-yql.media.yahoo.com/forecastrss?";
let location = "budapest";
var header = {
  "X-Yahoo-App-Id": process.env.YAHOO_APP_ID 
};
var request = new OAuth.OAuth(
    null,
    null,
    process.env.YAHOO_CONSUMER,
    process.env.YAHOO_SECRET,
    "1.0",
    null,
    "HMAC-SHA1",
    null,
    header
  );


 
    request.get(
      weatherApiEndpoint + "location=" + location + "&u=c&format=json",
      null,
      null,
      function(err, data, result) {
        if (err) {
          console.log('weather api error')
          next(err) // Pass errors to Express.

        } else {
          // console.log(data)
          res.send(JSON.parse(data))
          
        }
      }
    );


// https.get(weatherApiEndpoint, res2 => {
//   res2.setEncoding("utf8");
//   let body = "";
//   res2.on("data", data => {
//     body += data;
//   });
//   res2.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body);
//     res.send(body);

//   });
// })
});

module.exports = router;